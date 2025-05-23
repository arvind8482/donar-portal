'use client'

import React, { useState } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
 
import { Checkbox } from "@/components/ui/checkbox"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData extends { donorName?: string }, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: 'includesString',
  })

  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const totalPages = table.getPageCount()

  const getPageButtons = () => {
    let startPage = Math.max(pageIndex - 2, 0)
    const  endPage = Math.min(startPage + 4, totalPages - 1)
    if (endPage - startPage < 4) {
      startPage = Math.max(endPage - 4, 0)
    }

    const buttons = []
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded border ${
            i === pageIndex ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
          }`}
          onClick={() => table.setPageIndex(i)}
          aria-current={i === pageIndex ? 'page' : undefined}
        >
          {i + 1}
        </button>
      )
    }
    return buttons
  }

  return (
    <div className="rounded-md border p-6 ">
      {/* Search input */}
      <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search by donor name..."
          className="px-3 py-2 border rounded-md w-64"
          value={globalFilter ?? ''}
          onChange={(e) => {
            table.setGlobalFilter(e.target.value)
            table.setPageIndex(0) // Reset to first page on search
          }}
        />

        {/* Page size selector */}
        <div>
          <label htmlFor="pageSize" className="mr-2 font-medium">
            Rows per page:
          </label>
          <select
            id="pageSize"
            className="rounded border px-2 py-1"
            value={pageSize}
            onChange={(e) =>
              setPagination((prev) => ({
                ...prev,
                pageSize: Number(e.target.value),
                pageIndex: 0,
              }))
            }
          >
            {[5, 10, 20, 30, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              <TableHead>&nbsp;</TableHead>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  onClick={
                    header.column.getCanSort()
                      ? header.column.getToggleSortingHandler()
                      : undefined
                  }
                  className={`cursor-pointer select-none whitespace-nowrap ${
                    header.column.getCanSort()
                      ? 'text-blue-600 hover:underline'
                      : ''
                  }`}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() === 'asc' ? (
                    <span aria-label="sorted ascending"> ▲</span>
                  ) : header.column.getIsSorted() === 'desc' ? (
                    <span aria-label="sorted descending"> ▼</span>
                  ) : header.column.getCanSort() ? (
                    <span aria-label="sortable" className="opacity-30">
                      ⇵
                    </span>
                  ) : null}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                  <TableCell>
                          <Checkbox id={1+row.id} />
                  </TableCell>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4 space-x-4 flex-wrap">
        <div className="flex items-center space-x-2">
          <button
            className="rounded border px-3 py-1 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          {getPageButtons()}
          <button
            className="rounded border px-3 py-1 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
