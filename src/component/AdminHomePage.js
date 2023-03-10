import axios from "axios";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

function AdminHomePage() {
  return (
    <div class="row justify-content-center p-4">
      <h1 class="text-center" style={{ color:"black" }}>Welcome to xyz</h1>
      <div class="col-sm-4 rounded">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-primary">Add Question and Options</h5>
            <p class="card-text text-secondary">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/addQuestion" class="btn btn-primary">
              Click Here
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-4 rounded">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-primary">Remove Question</h5>
            <p class="card-text text-secondary">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/removeQuestion" class="btn btn-primary">
              Click Here
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-4 rounded">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-primary">Student Details</h5>
            <p class="card-text text-secondary">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/studentDetails" class="btn btn-primary">
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
