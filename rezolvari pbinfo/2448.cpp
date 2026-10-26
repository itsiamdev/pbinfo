#include <fstream>
#include <queue>
#include <vector>

using namespace std;
#define Inf 0x3f3f3f3f

ifstream cin("patrate3.in");
ofstream cout("patrate3.out");

int n,op;


int main(){
    
    cin >> op;
    if(op == 1){
        cin >> n;
        cout << n * 8;
    }
    else{
        cin >> n;
        int ok = 0;
        int i;
        for(i = 1; ok == 0 ; ++i)
            if(4 * i * (i+1) >= n)
                ok = 1;
            
            cout << i - 1;
    }
    return 0;
}