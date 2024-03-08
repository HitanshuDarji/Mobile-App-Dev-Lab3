/**
 * My To Do List App
 *
 * @format
 */
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';

function App() {

    const [toDos, setTodos] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

    return (
        <SafeAreaView>
            <ToDoList tasks={toDos}/>
            <ToDoForm />
        </SafeAreaView>
    );
}

export default App;