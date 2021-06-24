interface ErrorMessage {
    [key: string]: {
        errMsg: string,
        code: string,
        success: boolean
    }
}

const common: ErrorMessage = {
    success: {
        errMsg: '请求成功',
        code: '200',
        success: true
    },
    failed: {
        errMsg: '请求失败',
        code: '9999',
        success: false
    },
    noToken: {
        errMsg: '用户登录已过期',
        code: '401',
        success: false
    }
}

const login: ErrorMessage = {
    captchaError: {
        errMsg: '验证码错误',
        code: '200',
        success: false
    },

    noUser: {
        errMsg: '用户不存在',
        code: '200',
        success: false
    },

    passwordError: {
        errMsg: '密码错误',
        code: '200',
        success: false
    }
}

export default {
    common,
    login
}
