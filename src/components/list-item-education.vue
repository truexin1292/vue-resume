<template>
    <ListItem class="list-item-education">
        <span class="school" contenteditable="false">{{ school }}</span>
        <span class="major" contenteditable="false">{{ major }}</span>
        <span class="date" contenteditable="false">{{ date }}</span>
    </ListItem>
</template>
<script>
    import ListItem from './list-item'

    export default {
        name: 'ListItemEducation',
        components: {
            ListItem
        },
        props: {
            school: {
                type: String,
                default: '广州中医药大学'
            },
            major: {
                type: String,
                default: '医药英语'
            },
            date: {
                type: String,
                default: '2012.9 - 2016.6'
            }
        }
    }
</script>
<style lang="less">
    .list-item-education {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        .school {
            width: 40%
        }
        .major {
            width: 35%;
        }
        .date {
            width: 25%;
            text-align: right;
        }
    }
</style>
