<template>
    <div class="brief">
        <div class="avatar">
            <EditImage
                :src="require('../assets/img/head1.png')"
                width="212" height="212" :isCircle="true" class="img"
            >
            </EditImage>
            <div class="name" contenteditable="false">邹新许</div>
            <div class="job" contenteditable="false">前端工程师</div>
            <div class="location">
                <img src="../assets/location.png" alt="">
                <div class="location-name" contenteditable="false">广东广州</div>
            </div>
        </div>
        <div class="info">
            <ul>
                <li>
                    <div class="value" contenteditable="false">男</div>
                    <div class="key" contenteditable="false">性别</div>
                </li>
                <li>
                    <div class="value" contenteditable="false">26</div>
                    <div class="key" contenteditable="false">年龄</div>
                </li>
                <li>
                    <div class="value" contenteditable="false">本科</div>
                    <div class="key" contenteditable="false">学历</div>
                </li>
                <li>
                    <div class="value" contenteditable="false">年限</div>
                    <div class="key" contenteditable="false">2年</div>
                </li>
            </ul>
            <!--<img src="../assets/photo.jpeg" alt="photo">-->
        </div>
    </div>
</template>
<script>
    import EditImage from './edit-image'

    export default {
        name: 'Brief',
        components: {
            EditImage
        }
    }
</script>
<style lang="less">
    .brief {
        height: 630px;
        background-color: #f6f7f7;
        .avatar {
            height: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            & > .img {
                margin-bottom: 45px;
            }
            .name {
                font-size: 32px;
                margin-bottom: 14px;
            }
            .job {
                font-size: 24px;
                color: #555;
                margin-bottom: 16px;
            }
            .location {
                display: flex;
                align-itmes: center;
                .location-name {
                    font-size: 20px;
                    font-weight: bold;
                    margin-left: 10px;
                }
            }
        }
        .info {
            height: 128px;
            ul {
                height: 100%;
                display: flex;
                border-top: 1px solid #dad8d7;
                border-bottom: 1px solid #dad8d7;
                li:not(:last-child) {
                    border-right: 1px solid #dad8d7;
                }
                li {
                    width: 33.3333333%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                    .value {
                        margin-bottom: 10px;
                        font-size: 24px;
                        font-weight: bold;
                    }
                    .key {
                        font-size: 16px;
                        font-weight: bold;
                        color: #555;
                    }
                }
            }
        }
    }
</style>
