"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[778],{5301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var o=t(5893),i=t(1151);const s={title:"Extend Config",sidebar_label:"Extend Config",sidebar_position:1,slug:"/sdk/extend-config"},a=void 0,d={id:"sdk/extend-app-config",title:"Extend Config",description:"Extend App Config",source:"@site/docs/02-sdk/00-extend-app-config.md",sourceDirName:"02-sdk",slug:"/sdk/extend-config",permalink:"/main/sdk/extend-config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Extend Config",sidebar_label:"Extend Config",sidebar_position:1,slug:"/sdk/extend-config"},sidebar:"defaultSidebar",previous:{title:"Pending Packets",permalink:"/main/ibc/pending-packets"}},l={},r=[{value:"Extend App Config",id:"extend-app-config",level:2},{value:"SDK v0.50.X",id:"sdk-v050x",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"extend-app-config",children:"Extend App Config"}),"\n",(0,o.jsx)(n.p,{children:"Sometimes you want to extend the default app.toml configuration to pass in more values to a module."}),"\n",(0,o.jsx)(n.h3,{id:"sdk-v050x",children:"SDK v0.50.X"}),"\n",(0,o.jsxs)(n.p,{children:["First, create a new file called ",(0,o.jsx)(n.code,{children:"config.go"})," in your module, and define the structure for the configuration."]}),"\n",(0,o.jsx)(n.p,{children:"Examples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/rollchains/tiablob/blob/573d20e3d95bd81a76ed0c5eb6cb6f0a66ba6b41/tiasync/config.go#L72",children:"tiablob"})}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-golang",metastring:'title="simapp/x/mymodule/config.go"',children:'const (\n    FlagMyCustomValue = "mymodule.my-custom-value"\n\n    // This is called from app.go\n    DefaultConfigDir      = "config"\n    DefaultConfigTemplate = `\n\n\t[mymodule]\n\tmy-custom-value = "default value provided here"\n\t`\n)\n\nvar DefaultConfigTemplate = MyModuleConfig{\n\tMyModuleCustomValue: "default value provided here",\n}\n\ntype MyModuleConfig struct {\n\tMyModuleCustomValue string `mapstructure:"my-custom-value"`\n}\n\nfunc MyModuleConfigFromAppOpts(appOpts servertypes.AppOptions) MyModuleConfig {\n\treturn MyModuleConfig{\n        MyModuleCustomValue: cast.ToString(appOpts.Get(FlagMyCustomValue)),\n\t}\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In your ",(0,o.jsx)(n.code,{children:"cmd"})," directory, find the ",(0,o.jsx)(n.code,{children:"initAppConfig"})," function and modify it to add the new custom config types."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-golang",metastring:'title="simapp/cmd/commands.go"',children:'// initAppConfig helps to override default appConfig template and configs.\n// return "", nil if no custom configuration is required for the application.\nfunc initAppConfig() (string, interface{}) {\n\t// The following code snippet is just for reference.\n\n\ttype CustomAppConfig struct {\n\t\tserverconfig.Config\n\n\t\tMyModule  *mymodule.MyModuleConfig  `mapstructure:"mymodule"`\n\t}\n\n\tsrvCfg := serverconfig.DefaultConfig()\n\tsrvCfg.MinGasPrices = "0stake"\n\t// srvCfg.BaseConfig.IAVLDisableFastNode = true // disable fastnode by default\n\n\tcustomAppConfig := CustomAppConfig{\n\t\tConfig:   *srvCfg,\n\t\tMyModule:  &mymodule.DefaultMyModuleConfig,\n\t}\n\n\tcustomAppTemplate := serverconfig.DefaultConfigTemplate + mymodule.DefaultConfigTemplate\n\n\treturn customAppTemplate, customAppConfig\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var o=t(7294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);