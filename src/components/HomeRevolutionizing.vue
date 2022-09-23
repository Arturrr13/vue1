<template>
    <section class="home-revolutionizing">
        <div class="text-box section__wrapper">
            <h2>
                Revolutionizing
            </h2>
            <h1>
                Saving & borrowing  
            </h1>
            <span>
                Uma.Fi is a decentralized finance-based startup built to innovate and reform the native ways of the monetary system.
            </span>
            <a title="Go to documentation" rel="nofollow" id="click" class="button btn__style" @click="downloadText">
                Read Documentation
                <i v-for="index in 6" :key="index" :class="`circle--${index}`"></i>
            </a>
            <span>
                Become early bird and receive up to 7.5% bonus tokens by joining our Whitelist
            </span>
        </div>
        <div class="img img__blur">
            <img src="../assets/image/1.png" alt="">
        </div>    
    </section>
</template>

<script>
export default {
    name: 'HomeRevolutionizing',
    methods:{
        downloadText: function(){
          var blob = new Blob([ 'sampleText' ], { "type" : "application/pdf" });
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'decentralized-finance.pdf'
          link.click()
        }
    }
}
</script>