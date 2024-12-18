```javascript
// Correct use of $inc operator
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { count: 1 } });
```