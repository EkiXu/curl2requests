# curl2requests

A simple tool to convert curl command to Python requests style.

Install

```
npm i -g curl2requests
```

Example:

```
curl2requests -h
Usage: curl2requests [options] <command>

curl command

Arguments:
  command              curl command to convert

Options:
  -V, --version        output the version number
  -r, --remove-dollar  Remove $ in output
  -o, --output <file>  Output result to the given filenamee
  -h, --help           display help for command
```

```
curl2requests "curl -i -s -k -X $'GET' \
    -H $'Host: 127.0.0.1:8000' -H $'Accept: application/json, text/plain, */*' -H $'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36' -H $'DNT: 1' -H $'Referer: http://127.0.0.1:8000/' -H $'Accept-Encoding: gzip, deflate' -H $'Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7' -H $'Connection: close' \
    -b $'session=MTYxMjMzEDM4MXxHenprVU5Ob2c2amJfQzRxLWV1cGRDMFA5RFNOc2RWZHJwLXJ4SFc3bEd5X1JzXzllWFhCejRJTmI3dHhDejliSlZoSGxCc2FXNmRLdnN6RnNabFdKeU1jQjVPQU8tSHhMQVBhZHNEWl82SkE3TG5zUHJ0WUpyWlRLMjlMay0zMUVnPT18l0Uq76Z2trXgVzKlpl__HNzqLjsQ_y7VtXaJfP1RYMU=; student_id=1' \
    $'http://127.0.0.1:8000/api/auth/user-info'" -r

import requests

cookies = {
    'session': 'MTYxMjMzMDM4MXxHenprVU5Ob2c2amJfQzRxLWV1cGRDMFA5RFNOc2RWZHJwLXJ4SFc3bEd5X1JzXzllWFhCejRJTmI3dHhDejliSlZoSGxCc2FXNmRLdnN6RnNabFdKeU1jQjVPQU8tSHhMQVBhZHNEWl82SkE3TG5zUHJ0WUpyWlRLMjlMay0zMUVnPT18l0Uq76Z2trXgVzKlpl__HNzqLjsQ_y7VtXaJfP1RYMU=',
    'student_id': '1',
}

headers = {
    'Host': '127.0.0.1:8000',
    'Accept': 'application/json, text/plain, */*',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36',
    'DNT': '1',
    'Referer': 'http://127.0.0.1:8000/',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'Connection': 'close',
}

response = requests.get('http://127.0.0.1:8000/api/auth/user-info', headers=headers, cookies=cookies, verify=False
```