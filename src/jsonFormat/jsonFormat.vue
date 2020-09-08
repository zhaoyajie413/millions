<template>
    <div style="position: relative;">
        <pre v-html="jsonFormat">
        </pre>
        <a @click="copyText" class="json-formmat-btn">copy</a>
    </div>
</template>

<script>
    export default {
        name: "JsonFormat",
        props:['jsonText'],
        computed:{
            jsonFormat(){
              if(this.jsonText == undefined) return '';
              if(typeof this.jsonText == 'string')return this.jsonText;
              let json = this.jsonText;
                json = JSON.stringify(json, undefined, 2);
                 json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                 let res = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?),?/g, function(match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            cls = 'key';
                        } else {
                            cls = 'string';
                        }
                    } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                    } else if (/null/.test(match)) {
                        cls = 'null';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                })

                return res
            },
        },
      methods:{
        copyText(){
          var range = document.createRange();
          var copyDOM = document.createElement('a');
          copyDOM.innerHTML = typeof this.jsonText == 'string'? this.jsonText: JSON.stringify(this.jsonText);
          window.getSelection().removeAllRanges();
          document.body.appendChild(copyDOM)
          range.selectNode(copyDOM);     
          window.getSelection().addRange(range);  
          var successful = document.execCommand('copy');
          if(successful){
            this.$message.success('copy success!')
          }else{
            this.$message.success('copy fail!')
          }
          document.body.removeChild(copyDOM)
        }
      }
    }
</script>

<style lang="scss">
    $background:#000;
    pre {
        background-color:darken( $background, 2);
        border:1px solid darken( $background, 10);
        padding: 6px;
        border-radius: 3px;
        color: darken(#e5e5e5,30);
        word-break: break-all;
        overflow: auto;
        min-height: 40px;
        position: relative;
        max-height: 400px;
    }
    pre *{
        word-break: break-all;
    }
    .string {
        color: green;
        display: inline-block;
        max-width: 480px;
        word-break: break-all;
        white-space: normal;
        vertical-align: text-top;
    }
    .number { color: darkorange; }
    .boolean { color: blue; }
    .null { color: magenta; }
    .key { color: red; }
    .json-formmat-btn{
        position: absolute;
        top: 6px;
        right:26px;
    }
</style>
