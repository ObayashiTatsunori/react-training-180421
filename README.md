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

### テキストボックスへの入力を受け取る

テキストボックスへの入力を状態として持ってみます：

App.js:

```diff
         'House keeping',
         'Answer the survey',
         'Water the plants'
-      ]
+      ],
+      newTodo: ''
     };
 
+    this.handleChange = this.handleChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
   }
 
+  handleChange(event) {
+    this.setState({
+      newTodo: event.target.value
+    });
+  }
+
   handleClick() {
     const { todoList } = this.state;
```

```diff
       <section className="todoapp">
         <header className="header">
           <h1>todos</h1>
-          <input type="text" placeholder="new todo" />
+          <input type="text" placeholder="new todo" onChange={this.handleChange} value={this.state.newTodo} />
         </header>
         <section className="main">
           <ul className="todo-list">
```

クリックイベントを受け取ったときと同様、`setState()` メソッドを使います。  
「コンポーネントの状態は、`setState()` メソッドによって **のみ** 変化します」と述べましたが、テキストボックスに関しては、そのことが如実に現れます。  
`setState()` メソッドの呼び出しをコメントアウトすると実感できます。

### アイテムを追加する

テキストボックスの内容を、新たな TODO として追加できるようにします。

まず、アイテムが増えたときにリストが増えるよう、リストを可変にします：

App.js:

```diff
         </header>
         <section className="main">
           <ul className="todo-list">
-            <li>
-              <div className="view" onClick={this.handleClick}>{this.state.todoList[0]}</div>
-            </li>
-            <li>
-              <div className="view">{this.state.todoList[1]}</div>
-            </li>
-            <li>
-              <div className="view">{this.state.todoList[2]}</div>
-            </li>
+            {this.state.todoList.map((item, index) => (
+              <li key={index}>
+                <div className="view" onClick={this.handleClick}>{item}</div>
+              </li>
+            ))}
           </ul>
         </section>
       </section>
```

次に、エンターキーによってテキストボックスの内容がリストに追加されるようにします：

App.js:

```diff
       newTodo: ''
     };
 
+    this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.handleClick = this.handleClick.bind(this);
   }
 
+  handleSubmit(event) {
+    event.preventDefault();
+
+    const { todoList, newTodo } = this.state;
+
+    this.setState({
+      todoList: todoList.concat([newTodo])
+    });
+  }
+
   handleChange(event) {
     this.setState({
       newTodo: event.target.value
```

```diff
       <section className="todoapp">
         <header className="header">
           <h1>todos</h1>
-          <input type="text" placeholder="new todo" onChange={this.handleChange} value={this.state.newTodo} />
+          <form onSubmit={this.handleSubmit}>
+            <input type="text" placeholder="new todo" onChange={this.handleChange} value={this.state.newTodo} />
+          </form>
         </header>
         <section className="main">
           <ul className="todo-list">
```

### Option: DONE が適切な位置に追加されるよう修正

割愛

### Option: リストをストレージに保存する

割愛


## TODO アプリリファクタリング

### TodoList コンポーネントの作成

ここまでは `App` コンポーネントに全ての処理を書いていました。
このアプリの規模ではそれで十分です。
しかし、より高度なアプリを（メンテナンス可能なように）作るには、部品化が欠かせません。

TodoList コンポーネントを導入し、部品化を体験してみます。

まず、リスト部分を置き換えます：

```diff
 src/
 ├── App.js
 ├── App.test.js
 ├── index.js
 ├── registerServiceWorker.js
+└── TodoList.js
```

App.js:

```diff
 import React, { Component } from 'react';
+import TodoList from './TodoList';
 
 class App extends Component {
```

```diff
           </form>
         </header>
         <section className="main">
-          <ul className="todo-list">
-            {this.state.todoList.map((item, index) => (
-              <li key={index}>
-                <div className="view" onClick={this.handleClick}>{item}</div>
-              </li>
-            ))}
-          </ul>
+          <TodoList list={this.state.todoList} onClick={this.handleClick} />
         </section>
       </section>
     );
```

TodoList.js:

```diff
+import React from 'react';
+
+class TodoList extends React.Component {
+
+  render() {
+    return (
+      <ul className="todo-list">
+        {this.state.todoList.map((item, index) => (
+          <li key={index}>
+            <div className="view" onClick={this.handleClick}>{item}</div>
+          </li>
+        ))}
+      </ul>
+    );
+  }
+}
+
+export default TodoList;
```
