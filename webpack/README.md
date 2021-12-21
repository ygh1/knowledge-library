webpack中主要的两个过程，compiler,complation
compiler过程中就是初始化webpack配置对象，注册钩子，执行初始化webpack的插件，给webpack添加读写文件能力
complation阶段就是编译代码执行对应的插件，loader，编译chunk，打包生成文件


### plugin
由于webpack继承了 tapable 库，注册的钩子函数，写插件就是在钩子上注册事件，到了webpack特定的时机去执行，将webpack传递过来的资源进行修改

### loader
loader简单来说就是一个function，类似管理处理一样，配置对象正则匹配规则，通过loader获取到对应的资源，对其进行加工，返回给后边的loader处理