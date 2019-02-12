<template>
    <div class="my-chart"></div>
</template>
<script>
    import Echarts from 'echarts'
    // import JsonData from './data.js'
    export default {
        props: {
            option: {
                type: Object
            },

        },
        data(){
            return {
                options:  {
                    title: {
                        text: '分类雷达图',
                    },
                    radar: {
                        indicator: [{
                                name: '责任心',
                                max: 100
                            },
                            {
                                name: '执行力',
                                max: 100
                            },
                            {
                                name: '情商',
                                max: 100
                            },
                            {
                                name: '沟通能力',
                                max: 100
                            },
                            {
                                name: '合作性',
                                max: 100
                            },
                            {
                                name: '影响力',
                                max: 100
                            },
                            {
                                name: '学习能力',
                                max: 100
                            },
                            {
                                name: '洞察力',
                                max: 100
                            },
                            {
                                name: '开放性',
                                max: 100
                            },
                            {
                                name: '成就导向',
                                max: 100
                            },
                            {
                                name: '坚韧性',
                                max: 100
                            },
                        ],
                        center: ['50%', '50%'],
                        radius: '66%'
                    },

                    series: [{
                        type: 'radar',
                        zlevel: 2,
                        tooltip: {
                            show: true
                        },
                        lineStyle: {
                            width: 1,
                            opacity: 1
                        },
                        areaStyle: {
                            normal: {}
                        },
                        data: [{
                                value: [80, 80, 80, 80, 0, 0, 0, 0, 0, 0, 0],
                            },
                            {
                                value: [0, 0, 0, 80, 80, 80, 80, 0, 0, 0, 0],
                            },
                            {
                                value: [0, 0, 0, 0, 0, 0, 80, 80, 80, 80, 0],
                            },
                            {
                                value: [80, 0, 0, 0, 0, 0, 0, 0, 0, 80, 80],
                            },

                        ]
                    }, {
                        type: 'sunburst',
                        center: ['50%', '50%'],
                        nodeClick: false,
                        levels: [{},
                            {
                                r0: '80%',
                                r: '90%',
                            }
                        ],
                        data: [{
                                name: '职场渴望（愿不愿意好好干）',
                                value: 4,
                                label: {
                                    position: 'inside',
                                    rotate: 'tangential'
                                }
                            },
                            {
                                name: '职场潜力（能干多好）',
                                value: 4,
                                label: {
                                    position: 'inside',
                                    rotate: 'tangential'
                                }
                            },
                            {
                                name: '职场协作（能不能持续地干好）',
                                value: 4,
                                label: {
                                    position: 'inside',
                                    rotate: 'tangential'
                                }
                            },
                            {
                                name: '职场基础（能不能干好）',
                                value: 4,
                                label: {
                                    position: 'inside',
                                    rotate: 'tangential'
                                }
                            },
                        ],

                    }]
                },
                chart: null
            }
        },
        mounted() {
            this.init()
        },
        watch:{
            option: {
                deep: true,
                handler(val){
                    this.chart.setOption(val)
                }
            }
        },
        methods: {
            init(){
                this.chart = Echarts.init(this.$el, 'macarons')
                this.chart.setOption(this.options)
            },
        },
    }
</script>