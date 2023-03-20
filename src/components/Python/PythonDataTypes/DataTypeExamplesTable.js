import { useMemo } from "react";
import ReactTableWrapper from "../../ReactTableWrapper";

const DataTypeExamplesTable = () => {
    const data = useMemo(
        () => [
          {
            example: 'x = "Hello World"',
            datatype: 'str',
          },
          {
            example: 'x = 20',
            datatype: 'int',
          },
          {
            example: 'x = 20.5',
            datatype: 'float',
          },
          {
            example: 'x = 1j',
            datatype: 'complex'
          },
          {
            example: 'x = ["apple", "banana", "cherry"]',
            datatype: 'list'
          },
          {
            example: 'x = ("apple", "banana", "cherry")',
            datatype: 'tuple'
          },
          {
            example: 'x = range(6)',
            datatype: 'range'
          },
          {
            example: 'x = {"name" : "John", "age" : 36}',
            datatype: 'dict'
          },
          {
            example: 'x = {"apple", "banana", "cherry"}',
            datatype: 'set'
          },
          {
            example: 'x = frozenset({"apple", "banana", "cherry"})',
            datatype: 'frozenset'
          },
          {
            example: 'x = True',
            datatype: 'bool'
          },
          {
            example: 'x = b"Hello"',
            datatype: 'bytes'
          },
          {
            example: 'x = bytearray(5)',
            datatype: 'bytearray'
          },
          {
            example: 'x = memoryview(bytes(5))',
            datatype: 'memoryview'
          },
          {
            example: 'x = None',
            datatype: 'NoneType'
          }
        ],
        []
      );
    
      const columns = useMemo(
        () => [
          {
            Header: 'Example',
            accessor: 'example', // accessor is the "key" in the data
          },
          {
            Header: 'Data Type',
            accessor: 'datatype',
          },
        ],
        []
      );

      return (
        <ReactTableWrapper data={data} columns={columns} className = 'm-bottom-30'/>
      );
}

export default DataTypeExamplesTable;