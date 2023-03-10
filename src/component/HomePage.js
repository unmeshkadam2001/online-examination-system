import React from 'react'

export default function HomePage() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark primary-color bg-dark" >
                <a class="navbar-brand" href="#">GFG</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="basicExampleNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item active ">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Register</a>
                        </li>
                        
                        
                        
                    </ul>
               
                </div>
            </nav>
        </div>
    )
}
