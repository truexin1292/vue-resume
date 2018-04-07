<template>
    <ListItem class="list-item-project">
        <div class="heading">
            <span class="company" contenteditable="false">{{ name }}</span>
            <span class="job" contenteditable="false">{{ skill }}</span>
            <!--<span class="date" contenteditable="false">{{ date }}</span>-->
        </div>
        <div class="content">
            {{ content }}
        </div>
    </ListItem>
</template>
<script>
    import ListItem from './list-item'

    export default {
        name: 'ListItemProject',
        components: {
            ListItem
        },
        props: {
            name: {
                type: String,
                default: '蜂巢里平台 + 蜂巢里运营后台（pc）'
            },
            skill: {
                type: String,
                default: 'react + antd design + redux + webpack + less + es6 + react router'
            },
            content: {
                type: String,
                default: '个人信息展示，上传图片组件以及剪裁功能，地区组件，银行组件，验证码密码组件，会员中心，支付各个状态弹窗，登录注册流程，忘记密码流程，企业信息编辑与展示流程，员工管理，质检中心，资金中心状态流转流程，订单中心{买家中心+卖家中心}各个状态流程，通知中心tab展示，首页内页静态页面+表单；'
            },
            list: {
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
    .list-item-project {
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
