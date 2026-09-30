#include <fstream>

using namespace std;

int main()
{

    ifstream cin("multiple.in");
    ofstream cout("multiple.out");

    unsigned long long t,n,k;
    cin>>t;
    
    while(t != 0) {
        cin>>n>>k;
        unsigned long long m;
        m = k - n % k;
        
        cout<<m + n<<endl;

        t--;
    }
    
    return 0;
}

