import 'dotenv/config';

export default {
    expo: {
        name: 'EasyWay',
        slug: 'easyway',
        version: '1.0.0',
        extra: {
            OVERPASS_API_URL: process.env.OVERPASS_API_URL,
        },
    },
};
