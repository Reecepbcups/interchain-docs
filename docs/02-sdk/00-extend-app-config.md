---
title: Extend Config
sidebar_label: Extend Config
sidebar_position: 1
slug: /sdk/extend-config
---

## Extend App Config

Sometimes you want to extend the default app.toml configuration to pass in more values to a module.


### SDK v0.50.X

First, create a new file called `config.go` in your module, and define the structure for the configuration.

Examples:
- [tiablob](https://github.com/rollchains/tiablob/blob/573d20e3d95bd81a76ed0c5eb6cb6f0a66ba6b41/tiasync/config.go#L72)


```golang title="simapp/x/mymodule/config.go"
const (
    FlagMyCustomValue = "mymodule.my-custom-value"

    // This is called from app.go
    DefaultConfigDir      = "config"
    DefaultConfigTemplate = `

	[mymodule]
	my-custom-value = "default value provided here"
	`
)

var DefaultConfigTemplate = MyModuleConfig{
	MyModuleCustomValue: "default value provided here",
}

type MyModuleConfig struct {
	MyModuleCustomValue string `mapstructure:"my-custom-value"`
}

func MyModuleConfigFromAppOpts(appOpts servertypes.AppOptions) MyModuleConfig {
	return MyModuleConfig{
        MyModuleCustomValue: cast.ToString(appOpts.Get(FlagMyCustomValue)),
	}
}
```

In your `cmd` directory, find the `initAppConfig` function and modify it to add the new custom config types.

```golang title="simapp/cmd/commands.go"
// initAppConfig helps to override default appConfig template and configs.
// return "", nil if no custom configuration is required for the application.
func initAppConfig() (string, interface{}) {
	// The following code snippet is just for reference.

	type CustomAppConfig struct {
		serverconfig.Config

		MyModule  *mymodule.MyModuleConfig  `mapstructure:"mymodule"`
	}

	srvCfg := serverconfig.DefaultConfig()
	srvCfg.MinGasPrices = "0stake"
	// srvCfg.BaseConfig.IAVLDisableFastNode = true // disable fastnode by default

	customAppConfig := CustomAppConfig{
		Config:   *srvCfg,
		MyModule:  &mymodule.DefaultMyModuleConfig,
	}

	customAppTemplate := serverconfig.DefaultConfigTemplate + mymodule.DefaultConfigTemplate

	return customAppTemplate, customAppConfig
}
```
