import { ref, watch, onBeforeMount } from 'vue';
import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', () => {
  const users = ref({
    active: 'tienia',
    options: [
      {
        label: 'Belinda Neal',
        value: 'tienia',
      },
      {
        label: 'Austin Hill',
        value: 'osibic',
      },
    ]
  });

  const profiles = ref({
    tienia: {
      id: 'tienia',
      name: 'Belinda Neal',
      age: 45,
      childrens: [{
        id: 1695858759774,
        name: 'Sabrina Montgomery',
        age: 17,
      }, {
        id: 1695858759775,
        name: 'Freida Merritt',
        age: 22,
      }]
    },
    osibic: {
      id: 'osibic',
      name: 'Austin Hill',
      age: 37,
      childrens: [{
        id: 1695858765647,
        name: 'Lawanda Marshall',
        age: 19,
      }]
    }
  });
  
  const loadUsers = () => {
    let usersStorage = localStorage.getItem('users');

    if (JSON.stringify(users.value) != usersStorage) {
      users.value = JSON.parse(usersStorage);
    };
  };

  const saveUsers = () => {
    let usersStorage = localStorage.getItem('users');

    if (JSON.stringify(users.value) != usersStorage) {
      localStorage.setItem('users', JSON.stringify(users.value));
    };
  };

  const saveUser = (user) => {
    let { label, value } = user;
    let usersStorage = localStorage.getItem('users');

    users.value.options.forEach(e => {
      if (e.value == value) {
        e.label = label;
      };
    });

    if (JSON.stringify(users.value) != usersStorage) {
      localStorage.setItem('users', JSON.stringify(users.value));
    };
  };

  const addUser = (user) => {
    let usersStorage = localStorage.getItem('users');

    users.value.active = user.value;
    users.value.options.push(user);

    if (JSON.stringify(users.value) != usersStorage) {
      localStorage.setItem('users', JSON.stringify(users.value));
    };
  };

  const removeUser = () => {
    let index = users.value.options.findIndex(e => e.value == users.value.active);
    users.value.options.splice(index, 1);
    delete profiles.value[users.value.active];
    if(users.value.options.length > 0){
      users.value.active = users.value.options[0].value;
    }else{
      users.value.active = null;
    };

    saveUsers();
    saveProfiles();
  };

  const saveProfiles = () => {
    let profilesStorage = localStorage.getItem('profiles');

    if (JSON.stringify(profiles.value) != profilesStorage) {
      localStorage.setItem('profiles', JSON.stringify(profiles.value));
    };
  };

  const saveProfile = (user, profile) => {
    let profilesStorage = localStorage.getItem('profiles');
    profiles.value[user] = profile;

    if (JSON.stringify(profiles.value) != profilesStorage) {
      localStorage.setItem('profiles', JSON.stringify(profiles.value));
    };
  };

  const addProfile = (user, profile) => {
    let profilesStorage = localStorage.getItem('profiles');
    profiles.value[user] = profile;

    if (JSON.stringify(profiles.value) != profilesStorage) {
      localStorage.setItem('profiles', JSON.stringify(profiles.value));
    };
  };

  onBeforeMount(() => {
    let usersStorage = localStorage.getItem('users');

    if (!usersStorage) {
      localStorage.setItem('users', JSON.stringify(users.value));
    } else if (JSON.stringify(users.value) != usersStorage) {
      users.value = JSON.parse(usersStorage);
    };

    let profilesStorage = localStorage.getItem('profiles');

    if (!profilesStorage) {
      localStorage.setItem('profiles', JSON.stringify(profiles.value));
    } else if (JSON.stringify(profiles.value) != profilesStorage) {
      profiles.value = JSON.parse(profilesStorage);
    };
  });

  return {
    users,
    profiles,
    loadUsers,
    saveUsers,
    addUser,
    saveUser,
    removeUser,
    saveProfiles,
    addProfile,
    saveProfile
  };
});