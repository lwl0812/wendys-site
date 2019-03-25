<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: '5IbBjKCF0oMUEoNRnvS1GQ9n-gzGzoHsz',// your appId
      appKey: '4WEYY7iRboN89TCfCNu1JXtm', // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: 'comment' 
    });
  },
}
</script>