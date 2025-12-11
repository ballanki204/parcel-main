import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
const NotFound = () => {
    const location = useLocation();
    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);
    return (<Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-5xl font-bold text-primary">404</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary">
              <Link to="/">
                <Home className="w-4 h-4 mr-2"/>
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">
                <ArrowLeft className="w-4 h-4 mr-2"/>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>);
};
export default NotFound;
