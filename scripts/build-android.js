const { exec } = require('child_process')
const path = require('path')
const os = require('os')

const platform = os.platform()
const androidDir = path.join(__dirname, '../android')

// 定义命令
let command = ''

if (platform === 'win32') {
	// Windows 平台下的命令
	command = `cd ${androidDir} && gradlew assembleRelease && cd ..`
} else if (platform === 'darwin' || platform === 'linux') {
	// macOS 和 Linux 平台下的命令
	command = `cd ${androidDir} && ./gradlew assembleRelease && cd ..`
} else {
	console.error('Unsupported platform')
	process.exit(1)
}

// 执行命令
exec(command, (error, stdout, stderr) => {
	if (error) {
		console.error(`Error: ${error.message}`)
		return
	}
	if (stderr) {
		console.error(`stderr: ${stderr}`)
		return
	}
	console.log(`stdout: ${stdout}`)
})
