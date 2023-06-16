import React, { useState } from "react";
import { Col, Row, Pagination, Input, Select, DatePicker } from "antd";
import InstituteCard from "./InstituteCard";

const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

function UserInstituepage(props) {
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
            marginBottom: "0.5em",
          }}
        >
          <Col>
            <Search
              placeholder="Search Institute"
              onSearch={onSearch}
              style={{ width: 200, marginRight: "1em" }}
            />
          </Col>
          <Col>
            <Select
              showSearch
              style={{ width: 200, marginRight: "1em" }}
              placeholder="Select Institute Type"
              optionFilterProp="children"
              onChange={onChangeType}
              // onSearch={onSearch}
            >
              <Option value="institute_type_1">Institute Type</Option>
              <Option value="institute_type_2">Institute Type</Option>
              <Option value="institute_type_3">Institute Type</Option>
            </Select>
          </Col>
          <Col>
            <RangePicker />
          </Col>
        </Row>
        <InstituteCard />
        <InstituteCard />
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

export default UserInstituepage;
