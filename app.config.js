require('dotenv').config();

export default () => ({
    expo: {
        name: 'EasyWay',
        slug: 'EasyWay',
        version: '1.0.0',
        extra: {
            apiUrl: process.env.API_URL,
        },
    },
});
