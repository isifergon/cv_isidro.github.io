# Fix encoding issues in index.html
$path = "c:\Users\isipe\Downloads\MI_WEB\index.html"
$bytes = [System.IO.File]::ReadAllBytes($path)
$content = [System.Text.Encoding]::UTF8.GetString($bytes)

# Fix double-encoded UTF-8 characters
$replacements = @{
    [char]0x00C3 + [char]0x00BA = [char]0x00FA  # ú
    [char]0x00C3 + [char]0x00A9 = [char]0x00E9  # é
    [char]0x00C3 + [char]0x00B3 = [char]0x00F3  # ó
    [char]0x00C3 + [char]0x00A1 = [char]0x00E1  # á
    [char]0x00C3 + [char]0x00B1 = [char]0x00F1  # ñ
    [char]0x00C3 + [char]0x00AD = [char]0x00ED  # í
    [char]0x00C3 + [char]0x00BC = [char]0x00FC  # ü
    [char]0x00E2 + [char]0x20AC + [char]0x201C = [char]0x2014  # em dash
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, [string]$replacements[$key])
}

$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText($path, $content, $utf8NoBom)
Write-Host "Encoding fixed successfully"
