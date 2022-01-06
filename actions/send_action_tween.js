//noinspection JSUnresolvedVariable,JSUnresolvedFunction

export default async function send_action_tween(yoFrame, actionTweenData) {
    await yoFrame.evaluate((actionTweenData) => {
        const {userFrom, userTo, actionTweenType} = actionTweenData
        let actionTween;
        switch (actionTweenType) {
            case 'GIFT':
                actionTween = new MyLife.P2PActionTween(MyLife.ActionTweenType.GIFT, userFrom, userTo, null, !0)
                break;
            case 'HEART':
                actionTween = new MyLife.P2PActionTween(MyLife.ActionTweenType.KISS, userFrom, userTo, null, !0)
                break;
        }
        MyLife.ActionTweenManager.instance.play(actionTween);
    }, actionTweenData)
}
