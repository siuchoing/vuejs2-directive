<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
            <!-- pass an argument called :background-->
                <section title="global-directive">
                    <p v-highlight:background="'red'">Color this</p>
                    <p v-highlight:background.delayed="'red'">Color this (delayed)</p>
                    <p v-highlight="'red'">Color this</p>
                </section>
                <section title="local-directive">
                    <p v-local-highlight:background.delayed="'blue'">Color this (delayed)</p>
                    <p v-local-highlight:background.delayed.blink="'red'">Color this (delayed)</p>
                    <p v-local-complex-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this (delayed but faster)</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value;
                        let secondColor = 'orange';
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor; // default bg color
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, 1000);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value; // default bg color
                            } else {
                                el.style.color = binding.value;
                            }
                        }, delay);
                    }

                }
            },
            'local-complex-highlight': {
                bind(el, binding, vnode) {
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor; // default bg color
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor; // default bg color
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }

                }
            }
        }
    }
</script>

<style>

</style>
