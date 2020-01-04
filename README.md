学习各个src时，
1.先把src后面的'-文字说明'删除，只留src
2.运行npm install安装包
3.运行npm run serve
注意：每次运行代码，应该保证根目录下永远只有一个src目录

组件间通信

vue 组件间通信基本原则:
1) 不要在子组件中直接修改父组件的状态数据
2) 数据在哪, 更新数据的行为(函数)就应该定义在哪

vue 组件间通信方式:
1) props
2) vue 的自定义事件
3) 消息订阅与发布(使用 pubsub 库)
4) slot
5) vuex

以下是对vuex的详细解读

state
1) vuex 管理的状态对象(data)
2) 它应该是唯一的
mutations
1) 该对象包含很多回调函数，这些函数直接更新 state 
2) 由谁来触发: actions 中的 commit('mutation 名称')
3) 只能包含同步的代码, 不能写异步代码
actions
1) 该对象也包含很多回调函数，这些函数触发mutation回调函数，间接更新 state
2) 通过执行commit()来触发mutations对象内的回调函数
3) 谁来触发: 组件中: $store.dispatch('action 名称', data)
4) 可以包含异步代码(定时器, ajax)

getters
1) 包含多个getter计算属性函数的对象
2) 谁来读取: 组件中: $store.getters.xxx

store 对象
1) 所有用 vuex 管理的组件中都多了一个属性$store, 它就是一个 store 对象(该对象有2个属性、1个方法)
2) 属性:
				state: 注册的 state 对象
				getters: 注册的 getters 对象
3) 方法:
				dispatch(actionName, data): 触发action





