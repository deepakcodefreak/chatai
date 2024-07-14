import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats: [{
        id: 1,
        latestMessageTimestamp: 1720957966310,
        status: 'open',
        chatFeedback: {
            rating: 0,
            text: '',
            submitted: false
        },
        messageList: [
            {
                messageId: "msg1",
                message: "Hi, what can I help you with?",
                timestamp: 1720957966310,
                sender: "BOT",
                messageType: "text",
                messageFeedback: 'thumbsup'
            },
            {
                messageId: "msg2",
                message: "Need help with this order",
                timestamp: 1720957966310,
                sender: "USER",
                messageType: "text"
            }
        ]
    },
    {
        id: 2,
        latestMessageTimestamp: 1720957966310,
        status: 'open',
        messageList: [
            {
                messageId: "msg2",
                message: "Need help with this order",
                timestamp: 1720957966310,
                sender: "USER",
                messageType: "text"
            },
            {
                messageId: "msg1",
                message: "Hi, what can I help you with?",
                timestamp: 1720957966310,
                sender: "BOT",
                messageType: "text",
                messageFeedback: 'thumbsdown'
            }
        ]
    }],
    selectedChat: null
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        createNewChat: (state, action) => {
            const chatId = crypto.randomUUID()
            state.chats.push({
                id: chatId,
                status: 'open',
                latestMessageTimestamp: null,
                messageList: []
            })
            state.selectedChat = chatId;
        },
        addMessage: (state, action) => {
            const chatId = state.selectedChat;
            const { message, messageType, sender } = action.payload
            const newMessage = {
                messageId: crypto.randomUUID(),
                message: message,
                timestamp: Date.now(),
                messageType: messageType,
                sender: sender
            }
            state.chats = state.chats.map((chat) => {
                if (chat.id === chatId) {
                    return {
                        ...chat,
                        latestMessageTimestamp: Date.now(),
                        messageList: [...chat.messageList, newMessage]
                    }
                } else {
                    return chat;
                }
            })
        },
        setSelectedChat: (state, action) => {
            state.selectedChat = action.payload;
        },
        addMessageFeedback: (state, action) => {
            const { messageId, messageFeedback } = action.payload;
            const chatId = state.selectedChat;
            state.chats = state.chats.map((chat) => {
                if (chat.id === chatId) {
                    return {
                        ...chat,
                        messageList: chat.messageList.map((msg) => {
                            if (msg.messageId === messageId) {
                                return {
                                    ...msg,
                                    messageFeedback: messageFeedback
                                }
                            } else {
                                return msg
                            }
                        })
                    }
                } else {
                    return chat
                }
            })
        },
        updateChatStatus: (state, action) => {
            state.chats = state.chats.map((chat) => {
                if (chat.id === state.selectedChat) {
                    return {
                        ...chat,
                        status: action.payload
                    }
                } else {
                    return chat;
                }
            })
        },
        updateChatFeedback: (state, action) => {
            state.chats = state.chats.map((chat) => {
                if (chat.id === state.selectedChat) {
                    return {
                        ...chat,
                        chatFeedback: {
                            ...action.payload
                        }
                    }
                } else {
                    return chat;
                }
            })
        }
    }
})

export const { createNewChat, addMessage, setSelectedChat, addMessageFeedback, updateChatStatus, updateChatFeedback } = chatSlice.actions;

export default chatSlice.reducer