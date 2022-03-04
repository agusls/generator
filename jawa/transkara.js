const sortArray = arr => {
    return arr.sort((a, b) => {
        return b.length - a.length;
    });
}

const arrayToRegex = arr => {
    return arr.join("|")
}

const makeRegEx = (currentScheme) => {
    let res = {};
    Object.keys(currentScheme).forEach(key => {
        let arr = []
        Object.keys(currentScheme[key]).forEach(key2 => {
            arr.push(regExBackslash(key2));
        });
        arr = sortArray(arr)
        res[key] = arrayToRegex(arr)
    });
    return res;
}

const regExBackslash = c => {
    let needBackslash = "[]().\\+-"
    if (needBackslash.includes(c)) {
        return "\\" + c
    }
    return c
}

const transliterateRoman = (to, iStr, skema, opt) => {
    const from = "latin"
    const scheme = skema;
    const objRegEx = makeRegEx(scheme);
    const sigeg = c => {
        if (scheme.panyigeg[c]) {
            return scheme.panyigeg[c]
        }
        return scheme.nglegena[c] + scheme.virama
    }

    const PATT = {
        KRVK: 1,
        KRV: 2,
        KVK: 3,
        KV: 4,
        VK: 5,
        V: 6,
        K: 7,
        O: 0
    }
    iStr = iStr.toLowerCase()
    if (to == "jawa") {
        iStr = iStr.replace(/è/g, "é")
        iStr = iStr.replace(/ě/g, "e")
        iStr = iStr.replace(/ê/g, "e")
        iStr = iStr.replace(/([ié])([aiueéo])/g, "$1y$2")
        iStr = iStr.replace(/([u])([aieéo])/g, "$1w$2")
        iStr = iStr.replace(/([o])([aieé])/g, "$1w$2")
        iStr = iStr.replace(/r([ryl])/g, "r $1")
        iStr = iStr.replace(/l([r])/g, "l $1")
        iStr = iStr.replace(/n([cj])/g, "ny$1")
    }
    
    var iLength = iStr.length
    var idx = 0
    
    var tStr = ''
    var oStr = ''
    var aksara
    var suku
    var pattern = PATT.O

    const SYLLABLE = `^(${objRegEx.nglegena})?(${objRegEx.mandaswara})?(${objRegEx.swara})(${objRegEx.nglegena}|${objRegEx.panyigeg})?(${objRegEx.mandaswara}|${objRegEx.swara})?`

    while (idx < iLength) {
        suku = ""
        let [m, mC1, mR, mV, mC2, mVR] = iStr.match(SYLLABLE) || [null]
        if (m !== null) {
            if (mC1) {
                if (mC2) {
                    if (mR) {
                        if (mVR) {
                            pattern = PATT.KRV
                        } else {
                            pattern = PATT.KRVK
                        }
                    } else {
                        if (mVR) {
                            pattern = PATT.KV
                        } else {
                            pattern = PATT.KVK
                        }
                    }
                } else {
                    if (mR) {
                        pattern = PATT.KRV
                    } else {
                        pattern = PATT.KV
                    }
                }
            } else {
                if (mC2) {
                    if (mVR) {
                        pattern = PATT.V
                    } else {
                        pattern = PATT.VK
                    }
                } else {
                    pattern = PATT.V
                }
            }

            if (pattern == PATT.KRVK) {
                suku = mC1 + mR + mV + mC2
                aksara = scheme.nglegena[mC1] +
                    scheme.mandaswara[mR] +
                    scheme.sandhanganSwara[mV] +
                    sigeg(mC2)
            } else if (pattern == PATT.KRV) {
                suku = mC1 + mR + mV
                aksara = scheme.nglegena[mC1] +
                    scheme.mandaswara[mR] +
                    scheme.sandhanganSwara[mV]
            } else if (pattern == PATT.KVK) {
                suku = mC1 + mV + mC2
                if (scheme.swara.hasOwnProperty(mC1 + mV)) {
                    aksara = scheme.swara[mC1 + mV] +
                        sigeg(mC2)
                } else {
                    aksara = scheme.nglegena[mC1] +
                        scheme.sandhanganSwara[mV] +
                        sigeg(mC2)
                }
            } else if (pattern == PATT.KV) {
                suku = mC1 + mV
                if (scheme.swara.hasOwnProperty(mC1 + mV)) {
                    aksara = scheme.swara[mC1 + mV]
                } else {
                    aksara = scheme.nglegena[mC1] +
                        scheme.sandhanganSwara[mV]
                }
            } else if (pattern == PATT.VK) {
                suku = mV + mC2
                aksara = scheme.swara[mV] +
                    sigeg(mC2)
            } else {
                suku = mV
                aksara = scheme.swara[mV]
            }
            oStr += aksara
            tStr += suku + '(' + pattern + '):'
            pattern = PATT.aksara
        } else {
            let [m, p1] = iStr.match(`^(${objRegEx.nglegena}|${objRegEx.panyigeg})`) || [null]
            if (m != null) {
                suku = p1
                aksara = scheme.nglegena[p1] + scheme.virama
                oStr += aksara
                tStr += suku + ";"
            } else {
                let [m, p1] = iStr.match('^([0-9]+)') || [null]
                if (m != null) {
                    aksara = scheme.pengapitAngka
                    suku = p1
                    for (let c of suku) {
                        aksara += scheme.angka[c]
                    }
                    aksara += scheme.pengapitAngka
                    oStr += aksara
                } else {
                    let [m, p1] = iStr.match(`^(${objRegEx.pepadan})`) || [null]
                    if (objRegEx.pepadan.length > 0 && m != null) {
                        suku = p1
                        aksara = scheme.pepadan[p1]
                        oStr += aksara
                    } else {
                        suku = iStr.substr(0, 1)
                        aksara = suku
                        oStr += suku
                    }
                }
                tStr += suku + '(?)'
            }
        }
        iStr = iStr.substr(suku.length)
        idx += suku.length
    }

    if (to == "jawa") {
        oStr = oStr.replace(/꧀꧈/g, '꧀\u200C')
        oStr = oStr.replace(/꧀꧉/g, '꧀꧈')
    }
    if (opt) {
        if (opt.spasi == 0) {
            oStr = oStr.replace(/ +/g, '')
        }
    }
    return oStr
}

const transliterateAknus = (lang, iStr, skema) => {
    var iLength = iStr.length
    var idx = 0
    var jump = 0

    var tStr = ''
    var oStr = ''

    var NGALAGENA = '(' + skema.regna.konsonan + ')'
    var VOKALMANDIRI = '(' + skema.regna.swara + ')'
    var SUBJOIN = '(' + skema.regna.subjoin + ')?'
    var VOKAL = '(' + skema.regna.rarangken + ')?'
    var TUNGTUNG = '(' + skema.regna.ahir + ')?'
    var ANGKA = ''
    if (skema.regna.angka.length > 0) {
        var ANGKA = '(' + skema.regna.angka + ')'
    }
    var KRV0K = '^' + NGALAGENA + SUBJOIN + VOKAL + TUNGTUNG
    var VK = '^' + VOKALMANDIRI + TUNGTUNG
    var angka = '^(\\|)?' + ANGKA + '(\\|)?'

    var suku
    var silaba
    var r

    while (idx < iLength) {
        suku = ''
        silaba = ''
        r = iStr.match(KRV0K)
        if (r != null) {
            suku += r[1]
            silaba += skema.araka[r[1]]
            if (r[2]) {
                suku += r[2]
                silaba += skema.araka[r[2]]
            }
            if (r[3]) {
                suku += r[3]
                silaba += skema.araka[r[3]]
            } else {
                if (silaba !== "re") {
                    silaba += 'a'
                }
            }
            if (r[4]) {
                suku += r[4]
                silaba += skema.araka[r[4]]
            }
            oStr += silaba
            tStr += suku + ':'

        } else {
            r = iStr.match(VK)
            if (r != null) {
                suku += r[1]
                silaba += skema.araka[r[1]]
                if (r[2]) {
                    suku += r[2]
                    silaba += skema.araka[r[2]]
                }
                oStr += silaba
                tStr += suku + ':'
            } else {
                if (skema.regna.angka.length > 0) {
                    r = iStr.match(angka)
                    if (r) {
                        if (r[1]) {
                            suku += r[1]
                        }
                        suku += r[2]
                        oStr += skema.araka[r[2]]
                        if (r[3]) {
                            suku += r[3]
                        }
                    } else {
                        suku += iStr.substr(0, 1)
                        oStr += suku
                        tStr += suku + '(?)'
                    }
                }
            }
        }
        iStr = iStr.substr(suku.length)
        idx += suku.length
    }
    return oStr
}