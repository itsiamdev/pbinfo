#include <iostream>
using namespace std;

int main(){
    char c;
    int n, i, i2;
    cin>>n;
    cin>>c;
    for(i=1;i<=n;i++){
        for(i2=1;i2<=i;i2++){
            cout<<c;
        }
        cout<<endl;
    }
}