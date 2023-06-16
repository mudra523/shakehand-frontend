import React, { useState } from "react";
import { Col, Row, Pagination, Input, Select, DatePicker } from "antd";
import JobCard from "./JobCard";

const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

function InstituteJobsPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  const onChangeType = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => console.log(value);

  return (
    <Row style={{ display: "flex", justifyContent: "center" }}>
      <Col sm={24} sm={22} sm={20}>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.5em",
          }}
        >
          <Col>
            <Search
              placeholder="Search Jobs"
              onSearch={onSearch}
              style={{ width: "100%", marginRight: "1em" }}
            />
          </Col>
          <Col>
            <Select
              showSearch
              style={{ width: "100%", marginRight: "1em" }}
              placeholder="Select Job Type"
              optionFilterProp="children"
              onChange={onChangeType}
              // onSearch={onSearch}
            >
              <Option value="full_time">Full Time</Option>
              <Option value="part_time">Part Time</Option>
              <Option value="internship">Internship</Option>
            </Select>
          </Col>
          <Col>
            <Select
              showSearch
              style={{ width: "100%", marginRight: "1em" }}
              placeholder="Select Institute"
              optionFilterProp="children"
              onChange={onChangeType}
              // onSearch={onSearch}
            >
              <Option value="institute_1">Institute 1</Option>
              <Option value="institute_2">Institute 2</Option>
              <Option value="institute_3">Institute 3</Option>
            </Select>
          </Col>
          <Col>
            <RangePicker />
          </Col>
        </Row>
        <JobCard layout={"institute"} />
        <JobCard layout={"institute"} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination current={currentPage} onChange={onChange} total={50} />
        </div>
      </Col>
    </Row>
  );
}

export default InstituteJobsPage;
