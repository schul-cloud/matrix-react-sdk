/*
Copyright 2018 New Vector Ltd
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO: Update test for cross signing
// https://github.com/vector-im/riot-web/issues/13226

module.exports = async function() {
    console.log(" this is supposed to be an e2e test, but it's broken");
};

// const sendMessage = require('../usecases/send-message');
// const acceptInvite = require('../usecases/accept-invite');
// const invite = require('../usecases/invite');
// const {receiveMessage} = require('../usecases/timeline');
// const {createRoom} = require('../usecases/create-room');
// const changeRoomSettings = require('../usecases/room-settings');
// const {startSasVerifcation, acceptSasVerification} = require('../usecases/verify');
// const assert = require('assert');
//
// module.exports = async function e2eEncryptionScenarios(alice, bob) {
//     console.log(" creating an e2e encrypted room and join through invite:");
//     const room = "secrets";
//     await createRoom(bob, room);
//     await changeRoomSettings(bob, {encryption: true});
//     // await cancelKeyBackup(bob);
//     await invite(bob, "@alice:localhost");
//     await acceptInvite(alice, room);
//     // do sas verifcation
//     bob.log.step(`starts SAS verification with ${alice.username}`);
//     const bobSasPromise = startSasVerifcation(bob, alice.username);
//     const aliceSasPromise = acceptSasVerification(alice, bob.username);
//     // wait in parallel, so they don't deadlock on each other
//     const [bobSas, aliceSas] = await Promise.all([bobSasPromise, aliceSasPromise]);
//     assert.deepEqual(bobSas, aliceSas);
//     bob.log.done(`done (match for ${bobSas.join(", ")})`);
//     const aliceMessage = "Guess what I just heard?!";
//     await sendMessage(alice, aliceMessage);
//     await receiveMessage(bob, {sender: "alice", body: aliceMessage, encrypted: true});
//     const bobMessage = "You've got to tell me!";
//     await sendMessage(bob, bobMessage);
//     await receiveMessage(alice, {sender: "bob", body: bobMessage, encrypted: true});
// };
