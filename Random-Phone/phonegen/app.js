 const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
new Vue({
    el: '#fake-phone-generator',
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    txt: '#B3B3B3',
                    primary: '#097AFF',
                    gray: '#B3B3B3',
                    alice: '#F4F4F4',
                    error: '#FF9797'
                }
            }
        }
    }),
    data() {
        return {
            countries: [],
            selectedCountry: {
                "name": "United States",
                "dialCode": "+1",
                "isoCode": "US",
                "flag": "https://www.countryflags.io/US/flat/64.png"
            },
            copied: false,
            amount: 1,
            generatedNumber: [],
            selectedNumber: [],
            mask: 'xx xx xxxxxx'
        }
    },
    async mounted() {
        await this.getCountry();
    },
    methods: {
        addNum(num) {
            if (this.selectedNumber.includes(num)) {
                const index = this.selectedNumber.indexOf(num);
                if (index > -1) {
                    this.selectedNumber.splice(index, 1);
                }
            } else {
                this.selectedNumber.push(num)
            }
        },
        async getCountry() {
            try {
                const res = await axios.get('phonegen/data/country.json');
				// const res = await axios.get('https://textrapp.com/phonegen/data/country.json');
                this.countries = res.data;
            } catch (e) {
            }
        },
        copyClip() {
            if (this.selectedNumber.length > 0) {
                // navigator.clipboard.writeText(this.selectedNumber.join(" "));
                this.copy(this.selectedNumber.join(" "))
                this.copied = true;
                setTimeout(() => {
                    this.copied = false
                }, 3000)
            }
        },
        generate() {
            this.generatedNumber = [];
            this.selectedNumber = [];
            if (this.$refs.form.validate()) {
                while( this.generatedNumber.length < this.amount) {
                    var num = this.selectedCountry.dialCode.toString() + (Math.floor(Math.random() * 9000000000) + 1).toString();
                    if(phoneUtil.isValidNumberForRegion(phoneUtil.parse(num, this.selectedCountry.isoCode), this.selectedCountry.isoCode)){
                        this.generatedNumber.push(num)
                    }
                }

            }
        },
        selectAll() {
            this.selectedNumber = JSON.parse(JSON.stringify(this.generatedNumber));
        },
        copy(text) {
            var input = document.createElement('textarea');
            input.innerHTML = text;
            document.body.appendChild(input);
            input.select();
            var result = document.execCommand('copy');
            document.body.removeChild(input);
            return result;
        }

    },
})
;