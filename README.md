# React トレーニング

[Cloud9](https://aws.amazon.com/jp/cloud9/) 上で [Create React App](https://github.com/facebook/create-react-app) を使ってみます。


## プロジェクトセットアップ

### AWS アカウント作成, Cloud9 インスタンス起動

割愛

### Node.js を最新化

Node.js のバージョンマネージャー `nvm` で LTS 版をインストールし、デフォルトをその LTS 版に変更します：

```bash
nvm install --lts
nvm alias default stable
```

### Create React App でプロジェクトを初期化

npm スクリプトを即時実行できる `npx` コマンドを使い、`create-react-app` を実行します：

```bash
npx create-react-app myapp
cd myapp
npm start
```

`npm start` で開発サーバーが起動するので、Cloud9 のメニューから表示します：

    Cloud9 menu > Preview > Preview Running Application


## TODO アプリ作成

### モック作成

まずは、動きや変数のない見た目だけのモックを作成します。  
CSS は、簡単のため削除してしまいます。

```diff
 src/
-├── App.css
 ├── App.js
 ├── App.test.js
-├── index.css
 ├── index.js
-├── logo.svg
 └── registerServiceWorker.js
```

App.js:

```diff
 import React, { Component } from 'react';
-import logo from './logo.svg';
-import './App.css';
 
 class App extends Component {
   render() {
     return (
-      <div className="App">
-        <header className="App-header">
-          <img src={logo} className="App-logo" alt="logo" />
-          <h1 className="App-title">Welcome to React</h1>
-        </header>
-        <p className="App-intro">
-          To get started, edit <code>src/App.js</code> and save to reload.
-        </p>
-      </div>
+      <section className="todoapp">
+        <header className="header">
+          <h1>todos</h1>
+          <input type="text" placeholder="new todo" />
+        </header>
+        <section className="main">
+          <ul className="todo-list">
+            <li>
+              <div className="view">todo 1</div>
+            </li>
+            <li>
+              <div className="view">todo 2</div>
+            </li>
+            <li>
+              <div className="view">todo 3</div>
+            </li>
+          </ul>
+        </section>
+      </section>
     );
   }
 }
```

index.js:

```diff
 import React from 'react';
 import ReactDOM from 'react-dom';
-import './index.css';
 import App from './App';
 import registerServiceWorker from './registerServiceWorker';
 
 ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();
```

### 変数を表示する

スクリプト内の値を HTML に反映させてみます：

App.js:

```diff
 class App extends Component {
   render() {
+    const todoList = [
+      'House keeping',
+      'Answer the survey',
+      'Water the plants'
+    ];
+
     return (
       <section className="todoapp">
         <header className="header">
```

```diff
         <section className="main">
           <ul className="todo-list">
             <li>
-              <div className="view">todo 1</div>
+              <div className="view">{todoList[0]}</div>
             </li>
             <li>
-              <div className="view">todo 2</div>
+              <div className="view">{todoList[1]}</div>
             </li>
             <li>
-              <div className="view">todo 3</div>
+              <div className="view">{todoList[2]}</div>
             </li>
           </ul>
         </section>
```

### イベントを受け取る

クリックイベントを受け取り、アラートを表示してみます：

App.js:

```diff
 import React, { Component } from 'react';
 
 class App extends Component {
+
+  handleClick() {
+    alert('clicked!');
+  }
+
   render() {
     const todoList = [
       'House keeping',
```

```diff
         <section className="main">
           <ul className="todo-list">
             <li>
-              <div className="view">{todoList[0]}</div>
+              <div className="view" onClick={this.handleClick}>{todoList[0]}</div>
             </li>
             <li>
               <div className="view">{todoList[1]}</div>
```

### コンポーネントの状態を変化させる

クリックしたアイテムを「完了」状態にしてみます。

まずは、コンポーネントが状態を持てるようにします：

App.js:

```diff
 class App extends Component {
 
+  constructor(props) {
+    super(props);
+
+    this.state = {
+      todoList: [
+        'House keeping',
+        'Answer the survey',
+        'Water the plants'
+      ]
+    };
+  }
+
   handleClick() {
     alert('clicked!');
   }
 
   render() {
-    const todoList = [
-      'House keeping',
-      'Answer the survey',
-      'Water the plants'
-    ];
-
     return (
       <section className="todoapp">
         <header className="header">
```

```diff
         <section className="main">
           <ul className="todo-list">
             <li>
-              <div className="view" onClick={this.handleClick}>{todoList[0]}</div>
+              <div className="view" onClick={this.handleClick}>{this.state.todoList[0]}</div>
             </li>
             <li>
-              <div className="view">{todoList[1]}</div>
+              <div className="view">{this.state.todoList[1]}</div>
             </li>
             <li>
-              <div className="view">{todoList[2]}</div>
+              <div className="view">{this.state.todoList[2]}</div>
             </li>
           </ul>
         </section>
```

次に、クリックによってその状態を変化させてみます：

App.js:

```diff
         'Water the plants'
       ]
     };
+
+    this.handleClick = this.handleClick.bind(this);
   }
 
   handleClick() {
-    alert('clicked!');
+    const { todoList } = this.state;
+
+    todoList[0] += ' (DONE)';
+
+    this.setState({
+      todoList
+    });
   }
 
   render() {
```

ここでの React 的に重要なポイントは、`setState()` メソッドを使うところです。  
コンポーネントの状態は、`setState()` メソッドによってのみ変化します。

JavaScript 的につまずきやすいポイントは、`bind()` メソッドによる `this` の束縛です。
