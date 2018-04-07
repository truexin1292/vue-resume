<template>
    <div id="login">
        <div id="login-input">
            <el-row :gutter="20">
                <el-col :span="8" :offset="8">
                    <el-tooltip :disabled="disabled" :content="errorTip" placement="bottom-start" effect="light">
                        <el-input placeholder="please input my English name to see my cv" v-model="password"
                                  type="password">
                            <template slot="append">
                                <el-button @click="signin">确认</el-button>
                            </template>
                        </el-input>
                    </el-tooltip>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                password: '',
                disabled: true,
                errorTip: ''
            }
        },
        methods: {
            setTip(tip) { // 消息提示，1.5秒后自动关闭
                this.errorTip = tip
                this.disabled = false
                setTimeout(() => {
                    this.disabled = true
                    this.errorTip = ''
                }, 1500)
            },
            signin() { // 验证密码解除锁屏
                if (!this.password) {
                    this.setTip('密码不能为空')
                } else if (this.password !== 'true') {
                    this.setTip('我的名字错误！请重新输入')
                } else {
                    this.$router.replace('/main')
                }
            }
        }
    }
</script>

<style lang="less">
    #login {
        width: 100%;
        height: 100%;
        background: url(../../assets/auth-bg.jpg) no-repeat;
        background-size: 100% 100%;
        background-attachment: fixed;
        #login-input {
            position: absolute;
            width: 100%;
            height: 30px;
            top: calc(50% - 15px);
        }
    }
</style>
