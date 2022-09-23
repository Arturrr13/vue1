<template>
    <section class="presale">
        <div class="blur__on__responsive"></div>
        <div class="section__wrapper">
            <div class="text__box">
                <h1>Presale</h1>
                <span>
                    We plan to conduct the presale of our token in Q1 2022.
                </span>
                <ul>
                    <span>The details are as given below:</span>
                    <li>Token presale price - </li>
                    <li>Discount you get in presale - </li>
                    <li>Total number of whitelist spots </li>
                </ul>
                <span class="subtext">There are only two slabs available for buy. 0.5 BNB or 1 BNB.</span>
            </div>
            <form action="#" method="post" @submit.prevent="checkingForm">
                <div class="input-wrapper">
                    <div class="Wrapper--email">
                        <input v-model="email" type="text" placeholder="E-mail" title="Enter your E-mail" ref="email" @focus="inputLabel('email')" @blur="checkingInput('email')">
                    </div>
                    <div class="Wrapper--number">
                        <input v-model="amount" type="number" placeholder="Desired Invesment amount" title="Enter investment amount" ref="number" @focus="inputLabel('number')" @blur.prevent="checkingInput('number')">
                    </div>
                    <div class="Wrapper--twitterID">
                        <input v-model="twitterID" type="text" placeholder="Twitter ID" title="Enter your Twitter ID" id="twitterID" @focus="inputLabel('twitterID')" @blur="checkingInput('twitterID')">
                    </div>
                    <div class="Wrapper--telegramID">
                        <input v-model="telegramID" type="text" placeholder="Telegram ID" title="Enter your Telegram ID" id="telegramID" @focus="inputLabel('telegramID')" @blur="checkingInput('telegramID')">
                    </div>
                </div>
                <div class="Wrapper--bep20">
                    <input v-model="bep20" type="text" placeholder="BEP20 Address to receive UCF" title="Enter your BEP20 Address" @focus="inputLabel('bep20')" ref="bep20" @blur="checkingInput('bep20')">
                </div>
                <div class="Wrapper--country" ref="active">
                    <input v-model="country" type="text" placeholder="Country of residence" title="Enter your country of residence" ref="country" id="country" @keyup="search" @click.prevent="checkingCountry" @blur="checkingInput('country')">
                    <ul class="option">
                        <li v-for="(item, index) in selectData" :key="index" ref="option" @click="value(`${item.country}`)"><CountryFlag :iso="`${item.flag}`" mode="squared" /> {{ item.country }}</li>
                    </ul>
                </div>
                <div class="Wrapper--tweet">
                    <input v-model="urlTweet" type="text" placeholder="Link to tweet" title="Enter your link to tweet" id="tweet" @focus="inputLabel('tweet')" @blur="checkingInput('tweet')">
                </div>
                <div class="Wrapper--linkedIn">
                    <input v-model="urlLinked" type="text" placeholder="Link to LinkedIn post" title="Enter your link to LinkedIn post" id="linkedID" @focus="inputLabel('linkedIn')" @blur="checkingInput('linkedID')">
                </div>
                <button type="submit" title="Submit" id="click">submit</button>
            </form>

            <div class="message" v-bind:style="styleObject">
                <span>{{ textMessage }}</span>
            </div>
        </div>
        <img src="../assets/image/6.png" alt="">
    </section>
</template>

<script>
import CountryFlag from 'vue3-country-flag-icon'
import 'vue3-country-flag-icon/dist/CountryFlag.css'
import axios from 'axios'

export default {

    data() {
        return {
            formData: null,
            styleObject: {
              background: '',
              display: 'none'
            },
            BOT_API_ID: '5572284297:AAGcIYixFO0cFESbgoNVYlsHlEsSf5vDcpU',
            CHAT_ID: '-1001798307154',
            email: '',
            amount: '',
            twitterID: '',
            telegramID: '',
            country: '',
            bep20: '',
            urlTweet: '',
            urlLinked: '',
            textMessage: '',
            selectData: [],
            userData: []
        }
    },
    created(){
        axios
        .get('data/select.json')
        .then(res => {
            function SortArray(x, y){
                if (x.country < y.country) {return -1;}
                if (x.country > y.country) {return 1;}
                return 0;
            }
            this.selectData = res.data.sort(SortArray)
        })
    },
    name: 'MyPresale',
    components: {
      CountryFlag
    },
    mounted(){
        if(localStorage.length !== 0){
            this.userData = JSON.parse(localStorage.getItem('UserData'))
            if(this.userData.length !== 0){
                this.email = this.userData[0]
                this.amount= this.userData[1]
                this.bep20 = this.userData[2]
                this.twitterID = this.userData[3]
                this.telegramID = this.userData[4]
                this.country = this.userData[5]
                this.urlTweet = this.userData[6]
                this.urlLinked = this.userData[7]
            }
        }
    },
    methods: {
        search(){
            if(this.country === ''){
                this.$refs.country.style.border = '1px solid red'
                this.$refs.option.forEach(el => el.style.display = 'block')
                return
            }
            if(/^[a-zA-Z]+$/.test(this.country) === true){
                this.$refs.country.style.border = 'none'
                this.$refs.option.forEach(el => {
                    let regX = new RegExp( `${this.$refs.country.value}`, 'gi')
                    if(regX.test(el.innerText) === true){
                        el.style.display = 'block'
                    } else {
                        el.style.display = 'none'
                    }
                })
            }
        },
        value(el) {
            this.$refs.country.value = el
            this.$refs.active.classList.toggle('active')
            this.country = el
            this.checkingInput('country')
        },
        checkingCountry(){
            this.$refs.active.classList.toggle('active')
        },
        inputLabel(el) {
            document.querySelector('.label') !== null ? document.querySelector('.label').classList.remove('label') : true
            document.querySelector(`.Wrapper--${el} input`).value = ''
            document.querySelector(`.Wrapper--${el}`).style.position = 'relative'
            document.querySelector(`.Wrapper--${el}`).classList.add('label')
        },
        checkingInput(el){
            el === 'email' ? this.checkingEmail() : el === 'number' ? this.checkingNumber() : el === 'bep20' ? this.checkingBEP() : el === 'tweet' ? this.checkingURL('tweet') : el === 'linkedID' ? this.checkingURL('linkedID') : el === 'twitterID' ? this.checkingIdAndCountry('twitterID') : el === 'telegramID' ? this.checkingIdAndCountry('telegramID') : el === 'country' ? this.checkingIdAndCountry('country') : false
        },
        checkingEmail() {
            if(this.email.length > 0 && Boolean(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) !== false) {
                this.$refs.email.style.border = 'none'
                this.styleObject.display = 'none'
            } else {
                this.$refs.email.style.border = '1px solid red'
                this.message('incorrect E-mail', false)
                return false
            }
        },
        checkingNumber() {
            if(this.amount !== '' && this.amount > 0) {
               this.$refs.number.style.border = 'none'
               this.styleObject.display = 'none'
            } else {
               this.$refs.number.style.border = '1px solid red'
               this.message('incorrect investment amount', false)
               return false
            }
        },
        checkingBEP() {
            let checkBEP = /^[A-Za-z 0-9]+$/
            if(checkBEP.test(this.bep20) !== false && this.bep20.match(/[0-9]/) !== false && this.bep20.length > 0 ){
               this.$refs.bep20.style.border = 'none'
               this.styleObject.display = 'none'
            } else {
               this.$refs.bep20.style.border = '1px solid red'
               this.message('incorrect BEP20 Address', false)
               return false
            }
        },
        checkingURL(el) {
            let url = el ==='tweet' ? this.urlTweet : this.urlLinked,
                pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            if(pattern.test(url) !== false){
                document.getElementById(el).style.border = 'none'
                this.styleObject.display = 'none'
            } else {
               document.getElementById(el).style.border = '1px solid red'
               this.message('incorrect '+el, false)
               return false
            }
        },
        checkingIdAndCountry(el) {
            let idORcountry = el === 'twitterID' ? this.twitterID : el === 'telegramID' ? this.telegramID : this.country
            if(idORcountry !== ''){
                document.getElementById(el).style.border = 'none'
                this.styleObject.display = 'none'
            } else {
               document.getElementById(el).style.border = '1px solid red'
               this.message('incorrect '+el, false)
               return false
            }
        },
        formSubmit() {
            const text_form = "<i>Form data</i>"+
            "%0a<b>Email: </b>"+this.email+
            "%0a<b>Amount: </b>"+this.amount+
            "%0a<b>TwitterID: </b>"+this.twitterID+
            "%0a<b>TelegramID: </b>"+this.telegramID+
            "%0a<b>BEP20: </b>"+this.bep20+
            "%0a<b>Country: </b>"+this.country+
            "%0a<b>URLTweet: </b>"+this.urlTweet+
            "%0a<b>URLLinked: </b>"+this.urlLinked
            fetch(`https://api.telegram.org/bot${this.BOT_API_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${text_form}&parse_mode=HTML`)
        },
        checkingForm() {
            if(this.checkingEmail() !== false && this.checkingNumber() !== false && this.checkingIdAndCountry('twitterID') !== false && this.checkingIdAndCountry('telegramID') !== false && this.checkingBEP() !== false && this.checkingURL('tweet') !== false && this.checkingURL('linkedID') !== false){
                this.message('form submitted successfully', true)
                this.formSubmit()
                this.localStorage()
            }
        },
        message(text, status) {
            if( status === true) {
                this.styleObject.background = 'rgba(11, 199, 4, 0.81)'
                this.styleObject.display = 'flex'
                this.textMessage = text
            } else {
                this.styleObject.background = 'rgb(255 0 0 / 81%)'
                this.styleObject.display = 'flex'
                this.textMessage = text
            }
            setTimeout(() => {
                this.styleObject.display = 'none'
            }, 3000)
        },
        localStorage(){
            this.userData.splice(0, 8, this.email, this.amount, this.twitterID, this.telegramID, this.country, this.bep20, this.urlTweet, this.urlLinked)
            localStorage.setItem('UserData', JSON.stringify(this.userData))
        }
    }
}
</script>

<style lang="scss" scoped>
    .label{
        &::before{
            content: '';
            position: absolute;
            color: #63AF8F;
            top: -15px;
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 2.1px;
        }
    }

    span{
        opacity: 1;
        transform: translateX(0);
    }

    .Wrapper--email.label::before{
        content: 'Enter your E-mail';
    }

    .Wrapper--number.label::before{
        content: 'Enter investment amount';
    }

    .Wrapper--twitterID.label::before{
        content: 'Enter your Twitter ID';
    }

    .Wrapper--telegramID.label::before{
        content: 'Enter your Telegram ID';
    }

    .Wrapper--bep20.label::before{
        content: 'Enter your BEP20 Address';
    }

    .Wrapper--country.label::before{
        content: 'Enter your country of residence';
    }

    .Wrapper--tweet.label::before{
        content: 'Enter your link to tweet';
    }

    .Wrapper--linkedIn.label::before{
        content: 'Enter your link to LinkedIn post';
    }

    .Wrapper--country{
        position: relative;
        &.active{
            .option{
                display: block;
            }
            &::before{
                transform: rotate(135deg);
                top: 35px;
            }
        }
        &::before{
            content: '';
            transition: .5s;
            position: absolute;
            width: 13px;
            height: 13px;
            border-bottom: 3px solid #63AF8F;
            border-left: 3px solid #63AF8F;
            transform: rotate(-45deg);
            top: 30px;
            right: 15px
        }
        ::-webkit-scrollbar {
          width: 10px;
          position: relative;
        }
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px rgb(85, 26, 139); 
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #63AF8F; 
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #3c6e59; 
        }
        input[type=text]:hover{
            cursor: pointer;
        }
        .option{
            background: #0F100F;
            position: absolute;
            z-index: 5;
            width: 100%;
            height: 170px;
            border-radius: 10px;
            overflow: auto;
            margin-top: 10px;
            display: none;
            li{
                padding: 10px;
                color: #555457;
                text-transform: capitalize;
                list-style: none;
                &:hover{
                    background: #63AF8F;
                    color:#FFFFFF;
                    box-shadow: 0 5px 10px #63af8f;
                    margin: 0;
                }
            }
            &:hover{
                cursor: pointer;
            }
        }
    }

    section{
        position: relative;
        .section__wrapper{
            padding: 107px 0 107px 0;
        }
        img{
            position: absolute;
            top: 0;
            right: 0;
            max-width: 832px;
        }
    }

    input[type=text],
    input[type=number]{
        width: 100%;
        margin-top: 10px;
        height: 57px;
        border: none;
        min-width: 268px;
        background: #0F100F;
        border-radius: 5px;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: capitalize;
        color: #FFFFFF;
        padding: 15px;
    }

    input[type=number]::-webkit-inner-spin-button{
        appearance: none;
    }
    .input-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 22px;
        margin-bottom: 12px;
        input[type=number],
        input[type=text]{
            margin-top: 10px;
        }
    }

    form{
        max-width: 560px;
        display: flex;
        flex-direction: column;
        gap: 22px;
        margin-top: 22px;
        button{
            width: 310px;
            height: 54px;
            background: #555457;
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.11em;
            text-transform: uppercase;
            color: #FFFFFF;
            border: none;
        }
    }
    span, li, .subtext{
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.1em;
    }

    ul{
        margin: 32px 0;
        li{
            list-style:inside;
            font-size: 16px;
            line-height: 18px;
            margin-left: 10px;
        }
        li:nth-child(2) {
            padding-top: 15px;
        }
    }
    .subtext{
        font-size: 16px;
        line-height: 18px;
    }
    .message{
        width: 335px;
        height: 57px;
        position: absolute;
        top: 94%;
        right: 1%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        animation: messageAnimation .5s linear both;
        span{
            font-size: 18px;
            text-transform: uppercase;
            font-weight: 600;
            font-style: italic;
            padding: 0 10px;
            text-align: center;
        }
    }

    @keyframes messageAnimation {
        0%{transform: translateX(200px);}
        100%{transform: translateX(0);}
    }
</style>