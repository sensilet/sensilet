export default {
    wallet: {
        // this.$t('wallet.') {{$t('wallet.')}} :placeholder="$t('wallet.')"
        create_wallet: "創建一個新的錢包",
        create_wallet_notice: "創建一個新的錢包來保管BSV",
        create_wallet_notice_2: "請務必保存並妥善保管以下12個單詞",
        mnemonic: "助記詞",
        create_wallet_notice_3: "您的私鑰僅加密保存在當前設備上",
        create_wallet_notice_4: "如果您清除瀏覽器儲存、設備損壞或丟失，則需要這些文字來恢復錢包。",
        mnemonic_saved: "我已經把助記詞保存在了安全的地方",
        import_mnemonic: "從助記詞恢復",
        import_mnemonic_2: "恢復錢包",
        pre: "上一步",
        next: "下一步",
        confirm_mnemonic: "確認助記詞",
        confirm_mnemonic_placeholder: "請確認助記詞...",
        confirm_mnemonic_placeholder_2: "請輸入助記詞...",

        mnemonic_notice: "請在下方的輸入框填入上一步的助記詞",
        mnemonic_notice_2: "請先保存助記詞並勾選已保存",
        mnemonic_notice_3: "請在下方填入您的助記詞",
        mnemonic_error: '助記詞應有12個單詞',
        mnemonic_exist: '已經存在的助記詞，請勿重復添加',
        set_password: "設置密碼(可選)",
        set_password_notice: "設置一個密碼來保護您的錢包安全",
        set_password_notice_2: "如果您忘記了你的密碼，您需要使用助記詞重新恢復錢包",
        input_password: "請輸入密碼...(可選)",
        input_password_2: "請輸入密碼...",
        input_password_again: "請再次輸入密碼...(可選)",
        commit: "完成",
        save_error: "請勿重復添加",
        password_error: "兩次輸入的密碼不一致",
        back: "返回",
        unlock_wallet: "解鎖錢包",
        keep_unlock: "保持解鎖",
        unlock: "解鎖",
        password_error_2: "密碼錯誤",


        mnemonic_notice_4:"If you ever change browsers or move computers, you will need the Mnemonic Words to access this account. Save them somewhere safe and secret.",

        private_key:"Private Key",
        import_private: "Restore From Private Key(Wif)",
        private_notice_3: "Please enter your Private Key(Wif) to confirm",
        confirm_private_placeholder: "please enter your Private Key...",
        private_notice_4:"If you ever change browsers or move computers, you will need this Private Key to access this account. Save them somewhere safe and secret.",

        adv_options:"Advanced Options",
        options_notice:"If you don't know what the following options are, please don't modify them.",
        passphrase:"Passphrase: (Optional)",
        passphrase_notice_1:"The passphrase can provide additional protection to your assets. Even if your mnemonic is stolen, your assets are safe if the passphrase is not revealed.",
        passphrase_notice_2:"If the passphrase is set, you need to input this when importing your mnemonic words.",
        passphrase_notice_3:"If the passphrase is set, but the 12 mnemonic words are imported without inputing the passphrase, the wallet with the passphrase will NOT be restored and a new wallet without the passphrase will be created.",
        passphrase_notice_4:"The passphrase is not saved. So please be careful that, if you forget it, you will never be able to restore your assets.",
        der_path :"Derivation Path:",

        passphrase_import_notice_1:"You should input this if you have set it before.",
        passphrase_import_notice_2:"If you input a wrong passphrase, the restored wallet won't be the same wallet with the original passphrase.",

        agree_term: "Agree to the Terms of Service",
    },
    account: {
        // this.$t('account.') {{$t('account.')}} :placeholder="$t('account.')"
        receive: "接收",
        send: "發送",
        history: "歷史",
        hot: "熱門推薦",
        hot_app:"Hot Apps",
        token_list: "Token列表",
        input_address: "請輸入接收地址",
        input_amount: "請輸入金額(單位:{0})",
        clip: "{0} 已復製到剪貼板！",
        address_error: "無效的轉出地址",
        amount_error: "無效的金額",
        amount_error_2: "轉出金額需大於0",
        balance_not_enough: "賬戶余額不足",
        add_custom_token:"添加自定義Token",

        choose:"Choose",
        add:"Add New Account...",
        add_new:"Add New(create new Mnemonic)",
        alias_input:"input an alias",

        mode_single_key:"PrivKey",
        mode_HD:"HD",

        alias_max_limit:"alias need less than 12 char",
        alias_min_limit:"alias need more than 0 char",
    },
    setting: {
        expand_view: "展開視圖",
        import_mnemonic: "導入助記詞",
        export_mnemonic: "導出助記詞",
        import_private_key: "Import Private Key",
        export_private_key: "Export Private Key(Default Address)",
        notice_1:"DO NOT share the mnemonic with anyone!",
        notice_2:"Your funds will be transfered unexpectedly if the mnemonic is unintentionally revealed.",


        edit_account_alias:"编辑账户别称",
        delete_current_account: "删除当前账户",
        delete_confirm:"Input 'DELETE' to confirm."
    },
    popup: {
        // this.$t('popup.') {{$t('popup.')}} :placeholder="$t('popup.')"
        info_request: "允許此網站訪問您的賬戶信息嗎?",
        connect_notice: "只鏈接您信任的網站",
        cancel: "取消",
        connect: "鏈接",
        too_many_utxo: "UTXO過多",
        merge_notice: "在進行後續的操作之前，需要先合並UTXO",
        fee: "手續費約：",
        commit: "確定",
        unknown_token: "未知的Token信息",

        pay_request: "此網站申請支付{0}",
        sign_tx_request: "此網站申請簽名此交易",
        tx_type:"交易類型",
        sign_msg_request: "此網站申請對以下信息簽名",
        sign_notice:"對信息簽名不會使資金發生轉移。",
        sign_msg:"待簽名的消息：",
        sign:"簽名",
        receive_address: "收款地址:",
        amount: "支付金額:",
        balance: "賬戶余額:",
        broadcast: "是否廣播:",
        yes: "是",
        no: "否",
        change: "找零",

        error_balance: "賬戶余額不足",
        error_insufficient_balance: "賬戶BSV余額不足以支付手續費",
        error_insufficient_token: "賬戶內{0}余額不足",

    }
}
