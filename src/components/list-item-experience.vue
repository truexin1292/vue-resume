<template>
    <ListItem class="list-item-experience">
        <div class="heading">
            <span class="company" contenteditable="false">{{ company }}</span>
            <span class="job" contenteditable="false">{{ job }}</span>
            <span class="date" contenteditable="false">{{ date }}</span>
        </div>
        <div v-for="(item, index) in content" contenteditable="false">
            <p class="small-font"> {{ index+1 }}. {{ item }} </p>
        </div>
    </ListItem>
</template>
<script>
    import ListItem from './list-item'

    export default {
        name: 'ListItemExperience',
        components: {
            ListItem
        },
        props: {
            company: {
                type: String,
                default: 'Google'
            },
            job: {
                type: String,
                default: 'UI Desgner'
            },
            date: {
                type: String,
                default: '2011.9 - 2015.6'
            },
            content: {
                type: Array,
                default: function () {
                    return (
                        ['前端开发']
                    )
                }
            }
        }
    }
</script>
<style lang="less">
    .list-item-experience {
        .heading {
            font-size: 18px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            .company {
                width: 40%
            }
            .job {
                width: 35%;
            }
            .date {
                width: 25%;
                text-align: right;
            }
        }
        .small-font {
            font-size: 14px;
        }
    }
</style>
