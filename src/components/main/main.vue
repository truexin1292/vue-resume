<template>
    <div id="main">
        <div class="resume">
            <div class="left">
                <Brief>
                </Brief>
                <ContextList title="联系方法" :icon="require('../../assets/title-contact.png')">
                    <ListItemInfo title="13760651386"
                                  :image="require('../../assets/contact-phone.png')"
                                  slot="listItem">
                    </ListItemInfo>
                    <ListItemInfo title="truexin@163.com"
                                  :image="require('../../assets/contact-mail.png')"
                                  slot="listItem">
                    </ListItemInfo>
                    <ListItemInfo title="Truexinology"
                                  :image="require('../../assets/social-wechat.png')"
                                  slot="listItem">
                    </ListItemInfo>
                    <ListItemInfo title="1321037379"
                                  :image="require('../../assets/social-qq.png')"
                                  slot="listItem">
                    </ListItemInfo>
                </ContextList>
                <ContextList title="代码仓库" :icon="require('../../assets/title-contact.png')">
                    <ListItemInfo title="github.com/truexin1292"
                                  :image="require('../../assets/social-github.png')"
                                  slot="listItem">
                    </ListItemInfo>
                    <ListItemInfo title="gitee.com/truexinology"
                                  :image="require('../../assets/img/mayun.jpg')"
                                  slot="listItem">
                    </ListItemInfo>
                    <ListItemInfo title="coding.net/u/truexinology"
                                  :image="require('../../assets/img/coding.png')"
                                  slot="listItem">
                    </ListItemInfo>
                </ContextList>
            </div>
            <div class="right">
                <ContextList title="个人简介">
                    <ListItemAbout slot="listItem"></ListItemAbout>
                </ContextList>
                <ContextList title="实践技能">
                    <ListItemSkill slot="listItem" title="JavaScript" :percent="80"></ListItemSkill>
                    <ListItemSkill slot="listItem" title="Html5 + css3" :percent="80"></ListItemSkill>
                    <ListItemSkill slot="listItem" title="Vue" :percent="60"></ListItemSkill>
                    <ListItemSkill slot="listItem" title="React" :percent="90"></ListItemSkill>
                    <ListItemSkill slot="listItem" title="Angular" :percent="50"></ListItemSkill>
                    <ListItemSkill slot="listItem" title="Jquery" :percent="85"></ListItemSkill>
                    <ListItemSkill slot="listItem" title="Node" :percent="70"></ListItemSkill>
                </ContextList>
                <ContextList title="教育经历">
                    <ListItemEducation slot="listItem"
                                       school="广州中医药大学"
                                       major="医药英语"
                                       date="2012.09 — 2016.06">
                    </ListItemEducation>
                </ContextList>
                <ContextList title="工作经历">
                    <ListItemExperience
                        slot="listItem"
                        company="广东信基蜂巢科技有限责任公司"
                        job="前端工程师"
                        date="2016.12 — 2016.04"
                    >
                    </ListItemExperience>
                    <ListItemExperience
                        slot="listItem"
                        company="广州列丰信息科技有限责任公司"
                        job="前端工程师"
                        date="2016.03 — 2016.11"
                    >
                    </ListItemExperience>
                </ContextList>
                <ContextList title="实践项目">
                    <ListItemProject slot="listItem"></ListItemProject>
                    <ListItemProject slot="listItem"></ListItemProject>
                </ContextList>
            </div>
        </div>
        <div class="guide">
            <ul>
                <li>
                    <img src="../../assets/guide_click_left.png" height="60" width="60" alt="">
                    <div class="desc">
                        <h3>Click On Content</h3>
                        <p>To edit text or image</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/guide_click_right.png" height="60" width="60" alt="">
                    <div class="desc">
                        <h3>Right Click On Item</h3>
                        <p>To delete item</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/guide_add.png" height="60" width="60" alt="">
                    <div class="desc">
                        <h3>Click Add Button</h3>
                        <p>To add item</p>
                    </div>
                </li>
                <li>
                    <img src="../../assets/guide_sai.png" alt="">
                    <div class="desc">
                        <h3>Click Save Button</h3>
                        <p>To download resume as image</p>
                    </div>
                </li>
            </ul>
        </div>
        <button class="sap" @click="saveAsImage">Download Image</button>
        <button class="pdf" @click="saveAsPdf">Download pdf</button>
        <router-link to="login" class="back-btn">返回</router-link>
        <div class="footer">
            <a href="https://github.com/truexin1292/vue-resume" target="_blank">
                <img src="../../assets/social-github.png" height="36" width="36" alt="">
            </a>
            vue-resume designed by <a href="https://github.com/truexin1292">truexin1292</a>
        </div>
    </div>
</template>

<script>
    import ContextList from '../context-list'
    import ListItemAbout from '../list-item-about'
    import ListItemSkill from '../list-item-skill'
    import ListItemEducation from '../list-item-education'
    import ListItemExperience from '../list-item-experience'
    import ListItemProject from '../list-item-project'
    import ListItemInfo from '../list-item-info'
    import html2canvas from 'html2canvas'
    import JsPDF from 'jspdf'
    import FileSaver from 'file-saver'
    import Brief from '../brief'

    export default {
        name: 'Main',
        components: {
            ContextList,
            ListItemAbout,
            ListItemSkill,
            ListItemEducation,
            ListItemExperience,
            ListItemProject,
            ListItemInfo,
            Brief
        },
        methods: {
            saveAsImage() {
                let me = this;
                let resume = document.querySelector('.resume')
                html2canvas(resume).then((canvas) => {
                    canvas.toBlob(async (blob) => {
                        await FileSaver.saveAs(blob, 'Resume.png');
                        me.$router.replace('/login')
                    })
                })
            },
            saveAsPdf() {
                // 必须这种写法才能获取this
                let me = this;
                let resume = document.querySelector('.resume')
                html2canvas(resume).then((canvas) => {
                    let contentWidth = canvas.width;
                    let contentHeight = canvas.height;

                    // 一页pdf显示html页面生成的canvas高度;
                    let pageHeight = contentWidth / 592.28 * 841.89;
                    // 未生成pdf的html页面高度
                    let leftHeight = contentHeight;
                    // 页面偏移
                    let position = 0;
                    // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                    let imgWidth = 595.28;
                    let imgHeight = 592.28 / contentWidth * contentHeight;

                    let pageData = canvas.toDataURL('image/jpeg', 1.0);

                    let pdf = new JsPDF('', 'px', 'a4');

                    // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                    // 当内容未超过pdf一页显示的范围，无需分页
                    if (leftHeight < pageHeight) {
                        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                    } else {
                        while (leftHeight > 0) {
                            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                            leftHeight -= pageHeight;
                            position -= 841.89;
                            // 避免添加空白页
                            if (leftHeight > 0) {
                                pdf.addPage();
                            }
                        }
                    }

                    (async () => {
                        await pdf.save("resume.pdf");
                        me.$router.replace('/login')
                    })()
                })
            }
        }
    }
</script>

<style lang="less">
    body {
        padding: 0;
        margin: 0;
    }

    ul {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
        }
    }

    p {
        margin: 0 0 12px 0;
    }

    #main {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        background-color: #39af78;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 0;
        .resume {
            width: 1247px;
            /*height: 1754px;*/
            border: 1px solid #dad8d7;
            background-color: white;
            overflow: hidden;
            .left {
                width: 380px;
                height: 100%;
                box-sizing: border-box;
                float: left;
                background-color: #fdfefe;
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
            }
            .right {
                box-sizing: border-box;
                width: 867px;
                float: left;
                padding: 50px 40px;
                p {
                    font-size: 20px;
                    line-height: 32px;
                    color: #555;
                    text-align: justify;
                }
            }

        }
        button.sap {
            position: absolute;
            top: 65px;
            left: 45%;
            margin-left: 378px;
            background-color: white;
            border: 1px solid #dad8d7;
            cursor: pointer;
            padding: 5px 8px;
            border-radius: 4px;
            &:hover {
                background-color: #f8f8f8;
            }
        }
        .back-btn {
            position: absolute;
            top: 65px;
            right: 10px;
            background-color: white;
            border: 1px solid #dad8d7;
            cursor: pointer;
            padding: 5px 8px;
            border-radius: 4px;
            color: #39af78;
            text-decoration: none;
            &:hover {
                background-color: #f8f8f8;
            }
        }
        button.pdf {
            position: absolute;
            top: 65px;
            left: 50%;
            margin-left: 450px;
            background-color: white;
            border: 1px solid #dad8d7;
            cursor: pointer;
            padding: 5px 8px;
            border-radius: 4px;
            &:hover {
                background-color: #f8f8f8;
            }
        }
        .guide {
            border: 1px solid #dad8d7;
            width: 1247px;
            margin-top: 15px;
            height: 120px;
            background: #fff;
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                li {
                    display: flex;
                    align-items: center;
                    img {
                        margin: 0 10px;
                    }
                    h3 {
                        margin: 0 0 6px 0;
                    }
                    p {
                        margin: 0;
                        font-size: 16px;
                    }
                }
            }
        }
        .footer {
            line-height: 50px;
            a {
                text-decoration: none;
                color: #fff;
                &:first-child {
                    display: block;
                    text-align: center;
                    line-height: 0;
                    margin-top: 15px;
                }
            }
        }
    }

</style>
