<template>
<span >
    <a :href="link" id="trig1">{{text}}</a>
    <iframe id='ifrm1' name='ifrm1' class="preview-page" :src="link" scrolling="no"></iframe>
    
</span>
</template>

<script>
export default {
name : 'PreviewPage',
props: {
    link : String,
    text : String
}
}
</script>

<style>

.preview-page {
    width:500px; height:400px;
    -webkit-transform:scale(.25);
    -ms-transform:scale(.5);
    transform:scale(.7);
    -webkit-transform-origin:0 0; 
    -ms-transform-origin:0 0; 
    transform-origin:0 0; 
    border:4px solid #42b983;
    margin:0 0 0 0;
    overflow: hidden;
}

#ifrm1 {
  display : none;
  position: absolute;
}
#trig1:hover + iframe {
  display : block;
}
</style>