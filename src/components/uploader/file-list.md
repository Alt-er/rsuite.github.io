### 初始文件列表

<!--start-code-->

```js
const fileList = [
  {
    name: 'file1.jpg',
    fileKey: 1
  },
  {
    name: 'file2.jpg',
    fileKey: 2
  }
];
const instance = (
  <Uploader defaultFileList={fileList} action="//jsonplaceholder.typicode.com/posts/" />
);
ReactDOM.render(instance);
```

<!--end-code-->
