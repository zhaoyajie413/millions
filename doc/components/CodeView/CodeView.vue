
<template>
        <div class="codemirror">
            <codemirror
                    v-model="code"
                    :options="cmOption"
                    @cursorActivity="onCmCursorActivity"
                    @ready="onCmReady"
                    @focus="onCmFocus"
                    @blur="onCmBlur"
            />
        </div>

</template>

<script>
    import { codemirror } from 'vue-codemirror'

    // base style
    import 'codemirror/lib/codemirror.css'

    // theme css
   // import 'codemirror/theme/base16-dark.css'
    import 'codemirror/theme/monokai.css'
    // language
    import 'codemirror/mode/vue/vue.js'

    // active-line.js
    import 'codemirror/addon/selection/active-line.js'

    // styleSelectedText
    import 'codemirror/addon/selection/mark-selection.js'
    import 'codemirror/addon/search/searchcursor.js'

    // highlightSelectionMatches
    import 'codemirror/addon/scroll/annotatescrollbar.js'
    import 'codemirror/addon/search/matchesonscrollbar.js'
    import 'codemirror/addon/search/searchcursor.js'
    import 'codemirror/addon/search/match-highlighter.js'

    // keyMap
    import 'codemirror/mode/clike/clike.js'
    import 'codemirror/addon/edit/matchbrackets.js'
    import 'codemirror/addon/comment/comment.js'
    import 'codemirror/addon/dialog/dialog.js'
    import 'codemirror/addon/dialog/dialog.css'
    import 'codemirror/addon/search/searchcursor.js'
    import 'codemirror/addon/search/search.js'
    import 'codemirror/keymap/sublime.js'

    // foldGutter
    import 'codemirror/addon/fold/foldgutter.css'
    import 'codemirror/addon/fold/brace-fold.js'
    import 'codemirror/addon/fold/comment-fold.js'
    import 'codemirror/addon/fold/foldcode.js'
    import 'codemirror/addon/fold/foldgutter.js'
    import 'codemirror/addon/fold/indent-fold.js'
    import 'codemirror/addon/fold/markdown-fold.js'
    import 'codemirror/addon/fold/xml-fold.js'

    export default {
        name: 'code-view',
        title: 'Mode: text/x-vue & Theme: base16-dark',
        components: {
            codemirror
        },
        computed:{
            code:{
                get(){
                    return this.value
                },
                set(){

                }
            }
        },
        props:["value"],
        data() {
            return {
                cmOption: {
                    tabSize: 4,
                    foldGutter: true,
                    styleActiveLine: true,
                    lineNumbers: true,
                    lineWrapping: true,
                    line: true,
                    keyMap: "sublime",
                    mode: 'text/x-vue',
                    theme: 'monokai',
                    extraKeys: {
                        'F11'(cm) {
                            cm.setOption("fullScreen", !cm.getOption("fullScreen"))
                        },
                        'Esc'(cm) {
                            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false)
                        }
                    }
                }
            }
        },
        methods: {
            onCmCursorActivity(codemirror) {
                console.debug('onCmCursorActivity', codemirror)
            },
            onCmReady(codemirror) {
                console.debug('onCmReady', codemirror)
            },
            onCmFocus(codemirror) {
                console.debug('onCmFocus', codemirror)
            },
            onCmBlur(codemirror) {
                console.debug('onCmBlur', codemirror)
            }
        }
    }
</script>

<style lang="scss">
.codemirror pre{
    height: auto;
    min-height:auto;
}
.CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-family: monospace;
    height: auto;
    color: black;
    direction: ltr;
}
.CodeMirror-scroll {
    height: auto;
    overflow-y: hidden;
    overflow-x: auto;
}
</style>
