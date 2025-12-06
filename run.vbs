Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

' Get script directory
scriptDir = objFSO.GetParentFolderName(WScript.ScriptFullName)

' Change to script directory
objShell.CurrentDirectory = scriptDir

' Run the server
Set objProcess = objShell.Exec("node server.js")

' Wait for process to complete
Do While Not objProcess.Status
  WScript.Sleep 100
Loop
