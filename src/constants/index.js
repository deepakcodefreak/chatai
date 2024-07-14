export const MESSAGE_FEEDBACK_TYPES = {
    THUMBS_UP: 'thumbsup',
    THUMBS_DOWN: 'thumbsdown',
}

export const messageFeedbackMap = {
    [MESSAGE_FEEDBACK_TYPES.THUMBS_UP]: {
        type: [MESSAGE_FEEDBACK_TYPES.THUMBS_UP],
        title: 'Thumbs up',
        url: 'https://cdn.icon-icons.com/icons2/1686/PNG/512/12008thumbsup_111446.png'
    },
    [MESSAGE_FEEDBACK_TYPES.THUMBS_DOWN]: {
        type: [MESSAGE_FEEDBACK_TYPES.THUMBS_DOWN],
        title: 'Thumbs up',
        url: 'https://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/256/12014-thumbs-down-icon.png'
    }
}

export const CHAT_STATUS_TYPES = {
    OPEN: 'open',
    CLOSE: 'close'
}