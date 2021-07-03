const express = require('express');
const router = express.Router();
const {
    makeLoginWithGithub,
    searchAccessTokenGithubWithCode,
    searchRepositoryOrgByUser,
    makeLogOutEraseToken,
    savePingWebHookEvent,
    getContentRepo
} = require('../controller/LoginController')

router.get('/login/github', makeLoginWithGithub);
router.get('/logout', makeLogOutEraseToken);
router.get('/callback', searchAccessTokenGithubWithCode);
router.get('/repository', searchRepositoryOrgByUser);
router.post('/hooks', savePingWebHookEvent);
router.get('/getContentRepo', getContentRepo);


module.exports = router;