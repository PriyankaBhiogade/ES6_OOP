module.exports = {

    replceRegex(name, fullName, num, day, fileString) {

        fileString = fileString.replace("<<name>>", name);

        fileString = fileString.replace(/<<fullName>>/g, fullName);

        fileString = fileString.replace(/xxxxxxxxxx/g, num);

        fileString = fileString.replace(/xx-xx-xxxx/g, day);

        return fileString;
    },
    
        insertionSortString(arr) {
            for (var i = 1; i < arr.length; i++) {
              var temp = arr[i];
              var j = i - 1;
              while (j >= 0 && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j = j - 1;
              }
              arr[j + 1] = temp;
            }
            return arr;
          }, 
}
