<template>
    <section id="test" class="test-component page-section">
        <div class="container">
            <header class="main-title title">Test - {{modes[testMode].text}}</header>
            <div class="buttons-container">
                <button v-for="(mode, index) in modes" :key="index" @click="changeMode(mode)">{{mode.text}}</button>
            </div>
            <div v-for="(question,index) in questions" :key="index" class="one-question">
                <div class="question-container">
                    <div class="question">
                        <span class="number">{{question.id+1}}.</span>
                        <span v-if="question.topic" class="topic">[{{question.topic}}]</span>
                        <span class="text">{{question.text}}</span>
                    </div>
                    <div v-if="question.image !== ''" class="img-container">
                        <img alt="question image" :src="getImgPath(question)">
                    </div>

                </div>
                <div class="answers-container">
                    <div v-for="(answer, index) in question.answers" :key="index" class="one-answer">
                        <div v-if="answer.text"
                             :class="[{answered: question.answered === index}, {correct: question.correct === index}]"
                             class="text">
                            {{answer.text}}
                        </div>
                        <img v-if="answer.image"
                             :class="[{answered: question.answered === index}, {correct: question.correct === index}]"
                             :src="getImgPath(answer)">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "CodingComponent",
        data() {
            return {
                testMode: 'fullstack',
                modes: {
                    fullstack: {
                        id: 'fullstack',
                        text: 'Full Stack'
                    },
                    js: {
                        id: 'js',
                        text: 'JS'
                    },
                },
                questions: [],
                questionsfullstack: [
                    {
                        id: 0,
                        topic: "SQL",
                        text: "What kind of SQL statement retrieves data from a table?",
                        image: "",
                        answers: [{text: "READ"}, {text: "SELECT"}, {text: "FETCH"}, {text: "LOOKUP"}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 1,
                        topic: "Performance cache",
                        text: "Why is caching used to increase read performance?",
                        image: "",
                        answers: [{text: "It makes odd-numbered reads faster"}, {text: "It makes the second and subsequent reads faster"}, {text: "It makes the first read faster"}, {text: "It makes even-numbered reads faster"}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 2,
                        topic: "Auth",
                        text: "Which of the following is used to maintain a user's logged-in state as they browse multiple pages on a website?",
                        image: "",
                        answers: [{text: "Javascript global objects"}, {text: "WebSockets"}, {text: "HTTP cookies"}, {text: "HTTP keep-alive"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 3,
                        topic: "JS",
                        text: "Fill in the missing line of code",
                        image: "q3.png",
                        answers: [{text: "`num = maxNum`"}, {text: "`maxNum += 1`"}, {text: "`maxNum = num`"}, {text: "`maxNum += num`"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 4,
                        topic: "JS",
                        text: "What is the value of z after the following code runs?",
                        image: "q4.png",
                        answers: [{text: "'foo'"}, {text: "undefined"}, {text: "'bar'"}, {text: "'baz"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 5,
                        topic: "Rest",
                        text: "Which of the following HTTP request methods should not alter the state of the server?",
                        image: "",
                        answers: [{text: "PUT"}, {text: "PATCH"}, {text: "POST"}, {text: "GET"}],
                        answered: 1,
                        correct: 3
                    },
                    {
                        id: 6,
                        topic: "CSS",
                        text: "Why are more developers using new style sheet languages like LESS and SASS instead of CSS?",
                        image: "",
                        answers: [{text: "They enable more expressive templating by allowing javascript to execute inside styles."}, {text: "They introduce new functionality not present in CSS, like styling parent node when their children match a selector."}, {text: "They introduce new functionality not present in CSS, like styling parent node when their children match a selector."}, {text: "They compile to CSS, but provide convenient syntax for nesting, variables, and other features."}],
                        answered: 3,
                        correct: 3
                    },
                    {
                        id: 7,
                        topic: "FED",
                        text: "Suppose you receive data from an API as a string containing a JSON object.  \nHow should you convert this string into a Javascript object?",
                        image: "",
                        answers: [{text: "`str.to_json()`"}, {text: "`eval(str)`"}, {text: "`JSON.parse(str)`"}, {text: "`JSON.stringify(str)`"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 8,
                        topic: "JS",
                        text: "Fill in the missing code",
                        image: "q8.png",
                        answers: [{text: "`output.push(list[i])`"}, {text: "`output.push(list[i-1])`"}, {text: "`output.push(list[i] + output[i-1])`"}, {text: "`output.push(list[i-1] + output[i])`"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 9,
                        topic: "JS async",
                        text: "What\u2019s the expected output of the following JavaScript code?",
                        image: "q9.png",
                        answers: [{text: "Moe, Larry, Curly"}, {text: "Larry, Moe, Curly"}, {text: "It won\u2019t compile"}, {text: "Curly, Larry, Moe"}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 10,
                        topic: "Rest",
                        text: "What property do the HTTP methods GET, HEAD, PUT, and DELETE all have in common?",
                        image: "",
                        answers: [{text: "Requests have bodies"}, {text: "Requests should not change the state of the server"}, {text: "Multiple identical requests should have the same effect as a single request"}, {text: "Requests are cachable"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 11,
                        topic: "JS closure",
                        text: "Fill in the missing line of code:",
                        image: "q11.png",
                        answers: [{text: "`return x + y;`"}, {text: "`return function() { return arguments[0] + arguments[1] };`"}, {text: "`return function(y) { return x + y; };`"}, {text: "`return function() { return x + y };`"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 12,
                        topic: "JS closure",
                        text: "What is the value of g after the following code block runs?",
                        image: "q12.png",
                        answers: [{text: "An error occurs"}, {text: "60"}, {text: "5"}, {text: "120"}],
                        answered: 1,
                        correct: 3
                    },
                    {
                        id: 13,
                        topic: "Tools",
                        text: "How do Webpack and Babel differ?",
                        image: "",
                        answers: [{text: "Webpack is a module bundler, whereas Babel is a javascript compiler."}, {text: "Webpack and Babel are competing asset pipelines.  \nWebpack is configuration-based and more opinionated, where Babel offers more flexibility by giving explicit control over the process."}, {text: "Webpack and Babel fill similar roles, but Webpack offers hot module replacement whereas Babel supports inlining CSS and images."}, {text: "Webpack lets developers use new Javascipt features, and Babel resolves module dependencies."}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 14,
                        topic: "ES6 async",
                        text: "Which of the following describes the relationship between a Promise and async/await?",
                        image: "",
                        answers: [{text: "Promises can throw errors, but async/await always fails silently"}, {text: "Async/await is syntactic sugar for Promises that allows you to write synchronous-looking callback code"}, {text: "Async/await offloads work to an additional CPU thread, while Promises are syntactic sugar for callbacks"}, {text: "Promises are an implementation of the Observer pattern, while async/await bypasses the Javascript event loop"}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 15,
                        topic: "Rest",
                        text: "When testing your website against your API, you get the following error - why does this occur?",
                        image: "q15.png",
                        answers: [{text: "Browsers automatically include a convenient Origin header in cross-site requests, but it can be overridden to suppress this warning."}, {text: "The same-origin policy restricts how scripts interactwith resources on another origin.  \nMake sure your API allows cross-origin requests."}, {text: "Cross-site requests require a preflight CONNECT request to be sent ahead of time.  \nMake sure you manually send this requestbefore accessing the external domain."}, {text: "Modern browsers have sandboxed tabs, which cannot make cross-site AJAX requests.  \nProxy the request through your server instead."}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 16,
                        topic: "Performance",
                        text: "Which of the following strategies should we use to efficiently serve static assets to users around the globe?",
                        image: "",
                        answers: [{text: "Serve assets directly from S3 to guarantee high speed and availability."}, {text: "Serve assets from a CDN to leverage their infrastructure."}, {text: "Serve assets from our NGINX instance so that requests are authoritative but don\u2019t hit our app servers."}, {text: "Serve assets from our app server so that we guarantee users get the most up to date version."}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 17,
                        topic: "JS",
                        text: "Fill in the missing line of code",
                        image: "q17.png",
                        answers: [{text: "`newList.push(elems[elems.length])`"}, {text: "`newList.push(elems[elems.length - i])`"}, {text: "`newList.push(elems[elems.length - i - 1])`"}, {text: "`newList.push(elems[i])`"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 18,
                        topic: "JS",
                        text: "What is the value of g after the following code block runs?",
                        image: "q18.png",
                        answers: [{text: "60"}, {text: "120"}, {text: "24"}, {text: "1"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 19,
                        topic: "FED",
                        text: "When browser don\u2019t support a new feature, developers turn to polyfills. How do these work?",
                        image: "",
                        answers: [{text: "A polyfill replaces the CSS engine on a page to support new CSS3 features like animations and flexbox."}, {text: "A polyfill sets flags on the browser\u2019s runtime that enable experimental features that aren\u2019t on the stable channel yet."}, {text: "A polyfill implements an API so that developers can build against a consistent interface, even on unsupported browsers."}, {text: "A polyfill is a wrapper around a lightweight version of the V8 runtime, which contains working implementations for HTML5 features."}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 20,
                        topic: "JS",
                        text: "Suppose we have a function `f` which takes 3 arguments. What happens when `f` is called with only 1 argument?",
                        image: "",
                        answers: [{text: "The interpreter will throw a `ValueError` when the function is called."}, {text: "The interpreter will throw a `ReferenceError` if the 4unction uses its unspecified arguments."}, {text: "`f` will be called with `undefined` values for the unspecified arguments."}, {text: "`f` will be called with `null` values for the unspecified arguments."}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 21,
                        topic: "CSS",
                        text: "Suppose we have a page with the following style and handful of empty divs with class pink. What is rendered on the page?",
                        image: "q21.png",
                        answers: [{text: "An empty page. Empty inline elements have no width or height."}, {text: "Overlapping pink squares moving toward the bottom right of the page."}, {text: "Pink squares stacked vertically."}, {text: "Pink squares stacked horizontally."}],
                        answered: 3,
                        correct: 3
                    },
                    {
                        id: 22,
                        topic: "Auth",
                        text: "Which of the following fields would NOT be sent by a client in an OAuth 2.0 Password Grant request?",
                        image: "",
                        answers: [{text: "client_secret"}, {text: "refresh_token"}, {text: "password"}, {text: "client_id"}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 23,
                        topic: "CSS",
                        text: "Which of the following styles will horizontally center a fixed-sized element inside its parent?",
                        image: "",
                        answers: [{text: "`padding: 50%;`"}, {text: "`margin: 50%;`"}, {text: "`margin: auto;`"}, {text: "`padding: auto;`"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 24,
                        topic: "Performance cache",
                        text: "Which HTTP caching header is used to avoid making requests to the origin server?",
                        image: "",
                        answers: [{text: "expires"}, {text: "Last-Modified"}, {text: "Cache-Control: must-revalidate"}, {text: "Etag"}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 25,
                        topic: "JS",
                        text: "Fill in the missing line of code:",
                        image: "q25.png",
                        answers: [{text: "`return parseFloat(str)`"}, {text: "`return str.to_float`"}, {text: "`return parseNumber(str)`"}, {text: "`return str.toFloat();`"}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 26,
                        topic: "JS",
                        text: "What is the value of the variable `eventPrice` after the following code runs?",
                        image: "q26.png",
                        answers: [{text: "'$29.99'"}, {text: "null"}, {text: "'$19.99'"}, {text: "undefined"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 27,
                        topic: "Rest",
                        text: "Suppose a client POSTs to a REST HTTP endpoint to create a resource.  \nWhich header should the client use in the response for information about the newly created resource?",
                        image: "",
                        answers: [{text: "location"}, {text: "Server"}, {text: "Link"}, {text: "Content"}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 28,
                        topic: "JS",
                        text: "What does the following code do?",
                        image: "q28.png",
                        answers: [{text: "Finds the word \u201cdog\u201d in a string, and appends \u201ccat\u201d at that location"}, {text: "Creates an iterator from \u201cdog\u201d to \u201ccat\u201d in the string"}, {text: "Replaces every occurance of the word \u201cdog\u201d in a string with the word \u201ccat\u201d"}, {text: "Appends \u201cdogcat\u201d to the end of a string"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 29,
                        topic: "JS async",
                        text: "In what order does f receive its arguments?",
                        image: "q29.png",
                        answers: [{text: "bar, foo, baz"}, {text: "foo, baz, bar"}, {text: "foo, bar, baz"}, {text: "foo, baz"}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 30,
                        topic: "JS this",
                        text: "Consider the following Javascript code. The final output to the console is 0. Why?",
                        image: "q31.png",
                        answers: [{text: "`console.log` is async and therefore doesn\u2019t reflect the most up-to-date value."}, {text: "There\u2019s a bug in the for-loop."}, {text: "This is caused by Javascript\u2019s hoisting mechanism."}, {text: "`this` in `incr` doesn\u2019t have a reference to `incr.count`."}],
                        answered: 3,
                        correct: 3
                    },
                    {
                        id: 31,
                        topic: "ES6 spread",
                        text: "What does the expression `{...store, dispatch}` do?",
                        image: "",
                        answers: [{text: 'It creates a new object with all the keys and values from `store` and the key `"dispatch"` mapped to the value of `dispatch`.'}, {text: "It copies all the keys and values in `store` into `dispatch`."}, {text: "It creates a new object with all the keys from `store` and `dispatch`."}, {text: 'It creates a new object with all the keys and values from `dispatch` and the key `"store"` mapped to the value of `store`.'}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 32,
                        topic: "ES6 arrow funcs",
                        text: "How will `function_logger` and `fat_arrow_logger` behave differently?",
                        image: "q33.png",
                        answers: [{text: "The `log` function in `fat_arrow_logger` will inherit `this` from its parent scope."}, {text: "Fat  arrows are just semantic sugar for `function()`. There is no difference between the two."}, {text: "There is no difference here, but fat arrows generally only support one statement in their bodies."}, {text: "The `log` function in `function_logger` will inherit `this` from its parent scope."}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 33,
                        topic: "CSS",
                        text: "Which of the following selectors will make `Text` pink?",
                        image: "q34.png",
                        answers: [{text: "`.wrapper.elem { color: pink; }`"}, {text: "`#id { color: pink; }`"}, {text: "`div.elem { color: pink; }`"}, {text: "`.wrapper:nth-child(1) {color: pink; };`"}],
                        answered: 1,
                        correct: 1
                    }
                ],
                questionsjs: [
                    {
                        id: 0,
                        text: "What will be printed?",
                        image: "q1.png",
                        answers: [{text: "10"}, {text: "11"}, {text: "undefined"}, {text: "An error will be thrown"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 1,
                        text: "Consider the following code, which of the below implementation is correct?",
                        image: "q2.png",
                        answers: [{image: "q2a1.png"}, {image: "q2a2.png"}, {image: "q2a3.png"}, {image: "q2a4.png"}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 2,
                        text: "What will be printed?",
                        image: "q3.png",
                        answers: [{text: "10"}, {text: "11"}, {text: "undefined"}, {text: "An error will be thrown"}],
                        answered: 3,
                        correct: 3
                    },
                    {
                        id: 3,
                        text: "What will be printed?",
                        image: "q5.png",
                        answers: [{text: "XXX"}, {text: "abc"}, {text: "undefined"}, {text: "An error will be thrown"}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 4,
                        text: "What will be printed?",
                        image: "q6.png",
                        answers: [{text: "true"}, {text: "false"}, {text: "undefined"}, {text: "An error will be thrown"}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 5,
                        text: "What will be printed?",
                        image: "q7.png",
                        answers: [{text: "42"}, {text: "false"}, {text: "undefined"}, {text: "An error will be thrown"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 6,
                        text: "What will be printed?",
                        image: "q8.png",
                        answers: [{text: "1, 2, 3"}, {text: "0, 1, 2"}, {text: "'a', 'r', 'r'"}, {text: "An error will be thrown"}],
                        answered: 1,
                        correct: 1
                    },
                    {
                        id: 7,
                        text: "What will be printed?",
                        image: "q9.png",
                        answers: [{text: '{"id":1,"name":"Ori","sibling":{"id":2,"name":"Roni"}}'}, {text: '{"id":1,"name":"Ori"}'}, {text: "undefined"}, {text: "An error will be thrown"}],
                        answered: 3,
                        correct: 3
                    },
                    {
                        id: 8,
                        text: "What will be printed?",
                        image: "q10.png",
                        answers: [{text: "3"}, {text: "4"}, {text: "5"}, {text: "23"}],
                        answered: 2,
                        correct: 2
                    },
                    {
                        id: 9,
                        text: "What will be printed?",
                        image: "q11.png",
                        answers: [{text: "1"}, {text: "2"}, {text: "undefined"}, {text: "An error will be thrown"}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 10,
                        text: "What will be printed?",
                        image: "q12.png",
                        answers: [{text: "0"}, {text: "1"}, {text: "2"}, {text: "3"}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 11,
                        text: "Explain the following technique of sending jQuery as parameter. What is the motivation for it?",
                        image: "q13.png",
                        answers: [{text: "AMD compatible. This technique allow us to load the code using AMD loader such as RequireJS"}, {text: "CJS compatible. This technique allow us the use the code under NodeJS"}, {text: "Creates a local $ definition. Thus, we are not dependent on the global $ variable which may be overwrite by external library"}, {text: "Allow us to run the code under environment where jQuery is not present"}],
                        answered: 5,
                        correct: 5
                    },
                    {
                        id: 12,
                        text: "What will be printed?",
                        image: "q14.png",
                        answers: [{text: "true"}, {text: "false"}, {text: "A"}, {text: "An error will be thrown"}],
                        answered: 0,
                        correct: 0
                    },
                    {
                        id: 13,
                        text: "What will be printed?",
                        image: "q15.png",
                        answers: [{text: "X, Y, Z"}, {text: "<span>X</span>, <span>Y</span>, <span>Z</span>"}, {text: "Z, Y, X"}, {text: "An error will be thrown"}],
                        answered: 3,
                        correct: 3
                    },
                    {
                        id: 14,
                        text: "What will be printed?",
                        image: "q16.png",
                        answers: [{text: "before, fetched, after"}, {text: "before, after, fetched"}, {text: "before, fetched, after, fetched"}, {text: "An error will be thrown"}],
                        answered: 1,
                        correct: 1
                    }
                ],

            }
        },
        created() {
            this.questions = this[`questions` + this.testMode];
        },
        methods: {
            getImgPath(question) {
                return require(`@/assets/test/` + this.testMode + `/` + question.image);
            },
            changeMode(mode) {
                this.testMode = mode.id;
                this.questions = this[`questions` + this.testMode];
            }
        }
    }
</script>

<style lang="scss" scoped>
    #test.test-component {
        background-color: #ffffff;

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .main-title {
                width: 65%;
                margin-bottom: 50px;
            }

            .buttons-container {
                button {
                    cursor: pointer;
                    height: 40px;
                    margin: 10px;
                }
            }

            .one-question {
                width: 65%;
                border: 2px solid #e9ecef;
                padding: 10px;
                margin: 25px 0;
                border-radius: 12px;

                .question-container {
                    .question {
                        .number {
                            font-weight: bold;
                        }

                        .topic {
                            font-size: 13px;
                            margin: 0 5px;
                        }

                        .text {
                            font-weight: bold;
                        }
                    }

                    .img-container {
                        img {
                            width: 100%;
                            object-fit: scale-down;
                        }
                    }
                }

                .answers-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    border-top: 1px solid #bdbdbd;
                    margin-top: 15px;
                    padding-top: 15px;

                    .one-answer {
                        width: 100%;

                        img {
                            margin: 10px;
                            box-shadow: 0 1px 5px 0 rgba(44, 62, 80, 0.75);

                            &.answered {
                                border: 10px solid #d8d9f7;
                            }

                            &.correct {
                                border: 10px solid #d8f7dc;
                            }
                        }

                        .text {
                            padding: 5px;
                            margin: 5px;
                            border: 1px solid #bdbdbd;
                            width: fit-content;
                            border-radius: 8px;

                            &.answered {
                                background-color: #d8d9f7;
                            }

                            &.correct {
                                background-color: #d8f7dc;
                            }
                        }
                    }
                }
            }
        }
    }
</style>