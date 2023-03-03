import axios from "axios";

it('', async () => {
    await axios.get('https://t-api.leyserkids.jp/api/sns/v4/lk-cloud/storage/usage', {
        params: { institutionId: 4410 },
    });
})