// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1310772474660519986",
        serverId: "1154665272561651714",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 1, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: false,
    },
        {
        channelId: "1247838424371695616",
        serverId: "1171464902972551239",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 1, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: false,
    },
];
