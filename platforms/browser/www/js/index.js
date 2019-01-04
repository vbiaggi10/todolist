/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const listsArray = [];

const app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        // this.receivedEvent('deviceready');

        const handleBtnAdd = document.getElementById('btnAdd');
        handleBtnAdd.addEventListener('click', this.addList)
    },

    // Update DOM on a Received Event
    // receivedEvent: function(id) {
    //     var parentElement = document.getElementById(id);
    //     var listeningElement = parentElement.querySelector('.listening');
    //     var receivedElement = parentElement.querySelector('.received');

    //     listeningElement.setAttribute('style', 'display:none;');
    //     receivedElement.setAttribute('style', 'display:block;');

    //     console.log('Received Event: ' + id);
    // },

    addList: () => {
        const listName = document.getElementById('listName');
        const listsContainer = document.getElementById('listsContainer');

        listsArray.push({ name: listName.value });

        listName.value = '';
        listsContainer.innerHTML = '';

        listsArray.map((list, i) => {
            const div = document.createElement('div');
            const input = document.createElement('input');
            const p = document.createElement('p');
            const button = document.createElement('button');

            div.setAttribute('class', 'list_container');
            input.setAttribute('id', 'inputCheckBox' + i);
            input.setAttribute('type', 'checkbox');
            input.setAttribute('class', 'inline');
            p.setAttribute('class', 'inline');
            button.setAttribute('type', 'submit');
            button.setAttribute('id', 'BtnDeleteList' + i);

            p.textContent = list.name;
            button.textContent = 'Eliminar';

            div.appendChild(input);
            div.appendChild(p);
            div.appendChild(button);
            listsContainer.appendChild(div)
            // listsContainer.innerHTML += `
            //     <div class="list_container">
            //         <input class="inline" type="checkbox" name="" id="inputCheckBox${i}">
            //         <p class="inline">${list.name}</p>
            //         <button type="submit" id="BtnDeleteList${i}">Eliminar</button>
            //     </div>
            // `;

            const handleBtnShow = document.getElementById(`BtnDeleteList${i}`);

            handleBtnShow.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('clickeado')
                listsArray.splice(i, 1);
                console.log(listsArray)
            })
        })
    },

    paintTasks: () => {
        listsArray.map((list, i) => {
            listsContainer.innerHTML += `
                <div class="list_container">
                    <input class="inline" type="checkbox" name="" id="inputCheckBox${i}">
                    <p class="inline">${list.name}</p>
                    <button type="submit" id="BtnDeleteList${i}">Eliminar</button>
                </div>
            `;

            const handleBtnShow = document.getElementById(`BtnDeleteList${i}`);

            handleBtnShow.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('clickeado')
                listsArray.splice(i, 1);
                console.log(listsArray)
            })
        })
    }
};

app.initialize();